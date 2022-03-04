import 'dotenv/config'

let config = {
    port: process.env.PORT,
    server : '127.0.0.1:27017', // REPLACE WITH YOUR OWN SERVER
    database : 'colegio'       // REPLACE WITH YOUR OWN DB NAME
}

export { config }