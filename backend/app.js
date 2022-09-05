const express = require('express')
const app = express()
const cors = require('cors')
require('./src/config/db')

//? ROUTES IMPORT
const regRoutes = require('./src/routes/regs')
const deviceRoutes = require('./src/routes/devices')

//? MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

//? SETTING ROUTES
app.use('/regs', regRoutes)
app.use('/devices', deviceRoutes)

//? STATUS
app.use('/', express.Router().get('/',(req,res) => res.send('OK')))

//? HANDLING ROUTE NOT FOUND
app.use((req, res, next) => {
    const erro = new Error('Not found!')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error: {
            message: error.message
        }
    })
})

module.exports = app