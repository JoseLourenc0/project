const Sequelize = require('sequelize')

class Reg extends Sequelize.Model {

    static init(sequelize) {
        super.init({

            device_id: {
                type: Sequelize.INTEGER
            },
            data: {
                type: Sequelize.JSON
            }

        }, {
            sequelize,
            tableName: 'regs'
        })

        return this
    }

    static associate (models) {
        this.belongsTo(models.Device, { foreignKey: 'device_id'})
    }

}

module.exports = Reg