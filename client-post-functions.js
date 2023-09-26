const pool = require("./db")
const queries = require("./queries")

const addClient = (req, res) => {
    const { nro_cliente, nombre, apellido, direccion, activo } = req.body
    pool.query(queries.newUserQuery, [nro_cliente, nombre, apellido, direccion, activo], (error, results) => {
        if (error) {
            res.status(400).send("Error en la BD: " + error.message)
        }
        else {
            res.status(201).send("Cliente agregado con exito")
        }
    })
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
    const nro_cliente = req.query.nro_cliente
    delete req.query.nro_cliente

    const queryParamsArray = Object.entries(req.query)
    //console.log(nro_cliente)
    //console.log(queryParamsArray.length)
    //console.log(queryParamsArray)
    //const len = queryParamsArray.length
    const query = queries.buildModifyString(queryParamsArray, nro_cliente)
    const body = req.body
    var failed = false

    console.log(query)

    pool.query(query, (error, results) => {
        if (error) {
            failed = true
        }
    })

    /*for (const key in body) {
        if (body.hasOwnProperty(key)) {
            const value = body[key];
            console.log(`key: ${key}, value: ${value}`);
            pool.query(queries.modifyUserQuery, [client_id, key, value], (error, results) => {
                if (error) {
                    failed = true
                }
            })
        }
    }*/
    if (!failed) {
        res.status(201).send("Parametro del cliente modificado con exito")
    }
}

module.exports = {
    addClient,
    removeClient,
    modifyClient
}