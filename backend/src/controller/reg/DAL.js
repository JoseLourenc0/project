const Reg = require("../../models/Reg")
const Device = require("../../models/Device")

/**
 * @param deviceId {number}
 * @returns {Promise<{
 * id: {number}
 * device_id: {number}
 * data: {
 *  air_humidity: {number}
 *  air_temperature: {number}
 *  soil_humidity: {number}
 * }
 * Device: {
 *  id: {number}
 *  name: {string}
 * }
 * created_at: string
 * }[]>}
 */
const getByDeviceId = deviceId => {
    return Reg.findAll(
        { 
            where: {"device_id": deviceId},
            attributes: { exclude: ['updated_at']},
            include: [
                {
                    model: Device,
                    attributes: ['id', 'name']
                }
            ]
        }
    )
}

const insert = data => {
    return Reg.create(data)
}

module.exports = {
    getByDeviceId,
    insert
}