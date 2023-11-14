const pgp = require('pg-promise')();
const { MongoClient } = require('mongodb');
const fs = require("fs");

// PostgreSQL connection settings
const pgConfig = JSON.parse(fs.readFileSync("./pg_config.json", "utf-8"));

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'tpobd2';

const pgdb = pgp(pgConfig);

async function executeMapping(collectionName, tableName, mapFunction) {
    const mongoClient = new MongoClient(mongoUrl, { useUnifiedTopology: true });

    try {
        await mongoClient.connect();
        const db = mongoClient.db(dbName);
        const collection = db.collection(collectionName);

        // Query PostgreSQL and insert into MongoDB
        const pgData = await pgdb.any(`SELECT * FROM ${tableName}`);
        const mongoData = pgData.map(mapFunction);

        const insertResult = await collection.insertMany(mongoData);
        console.log(`${insertResult.insertedCount} records inserted into MongoDB collection '${collectionName}'`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        await mongoClient.close();
    }
};

const mapCliente = (row) => ({
    nro_cliente: row.nro_cliente,
    nombre: row.nombre,
    apellido: row.apellido,
    direccion: row.direccion,
    activo: row.activo,
});

const mapDetalleFactura = (row) => ({
    nro_factura: row.nro_factura,
    codigo_producto: row.codigo_producto,
    nro_item: row.nro_item,
    cantidad: row.cantidad
});

const mapFactura = (row) => ({
    nro_factura: row.nro_factura,
    fecha: row.fecha,
    total_sin_iva: row.total_sin_iva,
    iva: row.iva,
    total_con_iva: row.total_con_iva,
    nro_cliente: row.nro_cliente
});

const mapProducto = (row) => ({
    codigo_producto: row.codigo_producto,
    marca: row.marca,
    nombre: row.nombre,
    descripcion: row.descripcion,
    precio: row.precio,
    stock: row.stock
});

const mapTelefono = (row) => ({
    codigo_area: row.codigo_area,
    nro_telefono: row.nro_telefono,
    tipo: row.tipo,
    nro_cliente: row.nro_cliente
});

async function migrateData() {
    try {
        await executeMapping('clientes', 'E01_CLIENTE', mapCliente);
        await executeMapping('detalle_factura', 'E01_DETALLE_FACTURA', mapDetalleFactura);
        await executeMapping('factura', 'E01_FACTURA', mapFactura);
        await executeMapping('producto', 'E01_PRODUCTO', mapProducto);
        await executeMapping('telefono', 'E01_TELEFONO', mapTelefono);
    } catch (error) {
        console.error(`Error during migration: ${error.message}`);
    }
}

migrateData();

// Start the migration process
module.exports = { migrateData };