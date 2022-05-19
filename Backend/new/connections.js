const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Aniket@246",
    database: "fifa_db"
})

module.exports = client