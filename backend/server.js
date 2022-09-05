const http = require('http')
const app = require('./app')
const port = require('./.env').SERVER.PORT || 3001
const server = http.createServer(app)
const { version } = require('./package.json')

server.listen(port)
console.log(`
=======================================\n
       Listening on port  ${port}      \n 
       Version            ${version}   \n
=======================================\n
`)