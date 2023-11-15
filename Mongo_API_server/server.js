const routes = require("./routes")
const express = require("express")
const mongoose = require('mongoose');

const mongoString = 'mongodb://localhost:27017/tpobd2'

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connectado', () => {
    console.log('Base de datos conectada con exito');
})

const app = express()
const port = 9998

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Mongo API server del TPO Base de Datos II")
})

app.use("/api/v1", routes)

app.listen(port, () => {
    console.log(`La API Mongo esta corriendo en el puerto ${port}`)
})


