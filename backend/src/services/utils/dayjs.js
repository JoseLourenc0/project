const dayjs = require('dayjs')
const utcPlugin = require('dayjs/plugin/utc')
const timezonePlugin = require('dayjs/plugin/timezone')
dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)

dayjs.tz.setDefault('America/Sao_Paulo')

module.exports = {
    dayJs (props = null) {
        return dayjs(props)
    },
    now(format = 'YYYY-MM-DD HH:mm:ss') {
        return dayjs.tz().format(format)
    }
}