const { DayJs } = require('../../services/utils')
const now = DayJs.now()

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('devices',[
      {
        name: 'ESP32_DEV',
        protocol: 'http',
        created_at: now
      },
      {
        name: 'ESP32_DEV_MQTT',
        protocol: 'mqtt',
        created_at: now
      }
    ])
  },

  async down (queryInterface, Sequelize) {  }
};
