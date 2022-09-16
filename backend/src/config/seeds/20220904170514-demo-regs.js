const { DayJs } = require('../../services/utils')
const { REGS_NUMBER, TIME_BETWEEN_REG_IN_MIN, SINCE_DAYS_AGO } = require('../../../.env').SEQUELIZE_CONFIG.MOCK

const data = []

const mockTemp = index => {
  let temperature = 30
  const rand = Number(Math.random().toFixed(2)) + 0.2
  if(index === 0 ) return temperature
  const lastTemp = JSON.parse(data[index - 1].data).air_temperature

  if(lastTemp <= 30 || rand > 0.3) return temperature - rand

  return temperature + rand //if(lastTemp >= 10 || rand<=0.5)
}

const mockHumidity = (index, sub = 0) => {
  let h = 80 - sub
  const rand = Number(Math.random().toFixed(2)) + 3
  if(index === 0) return h
  const lastH = JSON.parse(data[index - 1].data).air_humidity
  
  if(lastH <= 100 || rand > 3.4) return h - rand

  return h + rand //if(lastTemp >= 40 || rand<=3.4)
}

for(let i = 0; i <= REGS_NUMBER ?? 100; i++)
  data.push({
    device_id: 1,
    data: JSON.stringify({
      air_humidity: mockHumidity(i, 10),
      air_temperature: mockTemp(i),
      soil_humidity: mockHumidity(i),
    }),
    created_at: DayJs.dayJs(DayJs.now()).subtract(SINCE_DAYS_AGO, 'day').add(i * TIME_BETWEEN_REG_IN_MIN, 'm').format('YYYY-MM-DD HH:mm:ss')
  })

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('regs', data)
  },

  async down (queryInterface, Sequelize) {  }
};
