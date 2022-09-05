const { DayJs } = require('../../services/utils')
const { REGS_NUMBER, TIME_BETWEEN_REG_IN_MIN } = require('../../../.env').SEQUELIZE_CONFIG.MOCK

const data = []
for(let i = 0; i <= REGS_NUMBER ?? 100; i++)
  data.push({
    device_id: 1,
    data: JSON.stringify({
      air_humidity: i <= REGS_NUMBER ? Math.abs( 100 - i/2 ) : Math.abs( i - 50/(i/50) ),
      air_temperature: i <= 40 ? i : 40 - i/3,
      soil_humidity: i <= REGS_NUMBER ? Math.abs( 90 - i/2 ) : Math.abs( i - 45/(i/45) ),
    }),
    created_at: DayJs.dayJs(DayJs.now()).add(i * TIME_BETWEEN_REG_IN_MIN, 'm').format('YYYY-MM-DD HH:mm:ss')
  })

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('regs', data)
  },

  async down (queryInterface, Sequelize) {  }
};
