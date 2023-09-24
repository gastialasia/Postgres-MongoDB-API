const pool = require("./db")
const queries = require("./queries")

const getAllClients = (req, res) => {
    pool.query(queries.getAllClientsQuery, (error, results) => {
        if (error) throw error
        else
        res.status(200).json(results.row)
    })
}

module.exports = {
    getAllClients
}