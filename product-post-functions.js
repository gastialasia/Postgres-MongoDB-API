const pool = require("./db")
const queries = require("./queries")

const addProduct = (req, res) => {
    const { codigo_producto, marca, nombre, descripcion, precio, stock } = req.body
    pool.query(queries.newProductQuery, [codigo_producto, marca, nombre, descripcion, precio, stock], (error, results) => {
        if (error) throw error
        else {
            res.status(201).send("Producto agregado con exito")
        }
    })
}

module.exports = {
    addProduct
}