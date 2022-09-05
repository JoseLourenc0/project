const moment = require('moment')
const DAL = require('./DAL')

exports.getByDeviceId = async (req,res) => {
    try {
        const { id } = req.params
        const queryParams = req.query
        let regs = await DAL.getByDeviceId(id)
        if(queryParams)
            regs = regs.filter(element => moment(element.created_at).isSame(moment(queryParams.date), 'day'))

        return res.send(regs)
    } catch (e) {
        return res.status(500).send({error: e.toString()})
    }
}

exports.insert = async (req,res) => {
    try {
        if(!req.body || !req.body.device_id) throw new Error('Not sent any data')
        const {
            air_temperature,
            soil_humidity,
            air_humidity,
            device_id
        } = req.body
        const result = DAL.insert({
            device_id,
            data: JSON.stringify({air_humidity,soil_humidity,air_temperature})
        })
        return res.send(result)
    } catch (e) {
        return res.status(500).send({error: e.toString()})
    }
}