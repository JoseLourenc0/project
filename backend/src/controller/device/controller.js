const DAL = require('./DAL')

exports.getAll = async (req,res) => {
    try {
        const regs = await DAL.getAll()

        return res.send(regs)
    } catch (e) {
        return res.status(500).send({error: e.toString()})
    }
}