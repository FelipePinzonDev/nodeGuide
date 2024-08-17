const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

const desirePortt = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hello World!')    
})

findAvailablePort(desirePortt).then(port => {
    server.listen(port, () => {
        console.log(`server listening on ${port}`);
    })
})