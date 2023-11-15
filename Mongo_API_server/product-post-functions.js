const mongoose = require('mongoose');
const database = mongoose.connection;

const addProduct = async (req, res) => {
    let collection = await database.collection("producto");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
}

const removeProduct = async (req, res) => {
    const product_id = parseInt(req.query.client_id);
    const query = {codigo_producto:product_id};
    console.log(query)
    let collection = await database.collection("producto");
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
}

const modifyProduct = async (req, res) => {
    const product_id = parseInt(req.query.product_id);
    let collection = await database.collection("producto");
    let params = req.body;
    let query = {codigo_producto:product_id};
    let result = await collection.updateOne(query,{$set:params});
    res.send(result).status(200);
}

module.exports = {
    addProduct,
    removeProduct,
    modifyProduct
}