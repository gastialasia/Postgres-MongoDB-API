const pool = require("./db")
const queries = require("./queries")

const addClient = (req, res) => {
    const { nro_cliente, nombre, apellido, direccion, activo } = req.body
    pool.query(queries.newUserQuery, [nro_cliente, nombre, apellido, direccion, activo], (error, results) => {
        if (error) throw error
        else {
            res.status(201).send("Cliente agregado con exito")
        }
    })
}

module.exports = {
    addClient
}