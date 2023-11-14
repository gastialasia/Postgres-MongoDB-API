const Pool = require("pg").Pool

const pool = new Pool({
    user: "usuario",
    host: "localhost",
    database: "tpo",
    password: "password",
    port: 5432
})

module.exports = pool