const mongoose = require('mongoose');
const database = mongoose.connection

const addClient = async (req, res) => {
    let collection = await database.collection("clientes");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
}

const removeClient = async (req, res) => {
    const client_id = parseInt(req.query.client_id);
    const query = {nro_cliente:client_id};
    console.log(query)
    let collection = await database.collection("clientes");
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
}

const modifyClient = async (req, res) => {
    const client_id = parseInt(req.query.client_id);
    let collection = await database.collection("clientes");
    let params = req.body;
    let query = {nro_cliente:client_id};
    let result = await collection.updateOne(query,{$set:params});
    res.send(result).status(200);
}

module.exports = {
    addClient,
    removeClient,
    modifyClient
}