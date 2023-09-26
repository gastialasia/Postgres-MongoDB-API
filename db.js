const Pool = require("pg").Pool

const pool = new Pool({
    user: "gasti",
    host: "localhost",
    database: "tpo",
    password: "estabien",
    port: 5433
})

module.exports = pool