const express = require("express")
const routes = require("./routes")
const mongoose = require('mongoose');

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