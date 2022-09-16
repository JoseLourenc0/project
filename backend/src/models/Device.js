const Sequelize = require('sequelize')

class Device extends Sequelize.Model {

    static init(sequelize) {
        super.init({

            name: {
                type: Sequelize.STRING(45),
                defaultValue: '',
                unique: {
                    msg: 'Device already exists!'
                },
                validate: {
                    len: {
                        args: [2,45],
                        msg: 'Device must have between 2 and 45 characters'
                    }
                }
            },
            protocol: {
                type: Sequelize.STRING,
                defaultValue: 'http',
                validate: {
                    isIn: [['http', 'mqtt']]
                }
            }

        }, {
            sequelize,
            tableName: 'devices'
        })

        return this
    }

}

module.exports = Device