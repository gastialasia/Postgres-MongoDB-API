const mongoose = require('mongoose');
const database = mongoose.connection

const addClient = async (req, res) => {
    let collection = await database.collection("clientes");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
}

const removeClient = (req, res) => {
    const client_id = req.query.client_id
    pool.query(queries.removeUserQuery, [client_id], (error, results) => {
        if (error) {
            res.status(400).send("Error en la BD: " + error.message)
        }
        else {
            console.log(client_id)
            res.status(201).send("Cliente removido con exito")
        }
    })
}

const modifyClient = (req, res) => {
    const client_id = req.query.client_id

    const queryParamsArray = Object.entries(req.body)

    const query = queries.buildModifyString(queryParamsArray, 'e01_cliente', 'nro_cliente', client_id)

    console.log(query)

    pool.query(query, (error, results) => {
        if (error) {
            res.status(400).send("Error en la BD: " + error.message)
        } else {
            res.status(201).send("Parametro/s del cliente modificado con exito")
        }
    })
}

module.exports = {
    addClient,
    removeClient,
    modifyClient
}