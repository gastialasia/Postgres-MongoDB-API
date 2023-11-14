const pool = require("./db")
const queries = require("./queries")

const addProduct = (req, res) => {
    const { marca, nombre, descripcion, precio, stock } = req.body
    pool.query(queries.newProductQuery, [marca, nombre, descripcion, precio, stock], (error, results) => {
        if (error) {
            res.status(400).send("Error en la BD: " + error.message)
        }
        else {
            res.status(201).send("Producto agregado con exito")
        }
    })
}

const removeProduct = (req, res) => {
    const product_id = req.query.product_id
    pool.query(queries.removeProductQuery, [product_id], (error, results) => {
        if (error) {
            res.status(400).send("Error en la BD: " + error.message)
        }
        else {
            res.status(201).send("Producto removido con exito")
        }
    })
}

const modifyProduct = (req, res) => {

    const product_id = req.query.product_id

    const queryParamsArray = Object.entries(req.body)

    const query = queries.buildModifyString(queryParamsArray, 'e01_producto', 'codigo_producto', product_id)

    console.log(query)

    pool.query(query, (error, results) => {
        if (error) {
            res.status(400).send("Error en la BD: " + error.message)
        } else {
            res.status(201).send("Parametro/s del producto modificado con exito")
        }
    })
}

module.exports = {
    addProduct,
    removeProduct,
    modifyProduct
}