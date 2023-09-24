const addClient = (req, res) => {
    console.log(req.body)
    res.status(201).send("Cliente agregado con exito")
}

module.exports = {
    addClient
}