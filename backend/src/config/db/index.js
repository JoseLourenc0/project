const Sequelize  = require('sequelize')
const databaseConfig  = require('./database')
const Device  = require('../../models/Device')
const Reg  = require('../../models/Reg')

const models = [Device, Reg]

const conn = new Sequelize(databaseConfig)

models.forEach( model => {
    model.init(conn)
    model.associate && model.associate(conn.models)
})

module.exports = conn