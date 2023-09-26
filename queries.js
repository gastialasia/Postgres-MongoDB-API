const getAllClientsQuery = "SELECT * FROM e01_cliente;"

const newUserQuery = "INSERT INTO e01_cliente (nro_cliente, nombre, apellido, direccion, activo) VALUES ($1, $2, $3, $4, $5);"

const removeUserQuery = "DELETE FROM e01_cliente WHERE nro_cliente = $1;"

const modifyUserQuery = "UPDATE e01_cliente SET $2 = $3 WHERE nro_cliente = $1; "

const newProductQuery = "INSERT INTO e01_producto (codigo_producto, marca, nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4, $5, $6);"

module.exports = {
    getAllClientsQuery,
    newUserQuery,
    newProductQuery,
    removeUserQuery,
    modifyUserQuery
}