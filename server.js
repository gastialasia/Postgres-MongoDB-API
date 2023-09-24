const express = require("express")
const routes = require("./routes")

const app = express()
const port = 9999

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Api del TPO Base de Datos II")
})

app.use("/api/v1", routes)

app.listen(port, ()=> {
    console.log("La API esta corriendo...")
})

