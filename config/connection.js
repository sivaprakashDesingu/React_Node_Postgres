const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "myapp",
    port: 5432,
    password: "root",
    database: "myapp"
})

module.exports = client