const sequelize = require("sequelize")
const Device = require("../../models/Device")
const Reg = require("../../models/Reg")

/**
 * @param deviceId {number}
 * @returns {Promise<{
 * id: {number}
 * name: {string}
 * created_at: string
 * }[]>}
 */
const getAll = () => {
    return Device.findAll({
        attributes: { exclude: ['updated_at'] }
    })
}

module.exports = {
    getAll
}