import * as mqtt from 'mqtt'

const mqttClient = {
    env: 'dev',
    mqtt: mqtt.connect('44.201.185.178:1883')
}

export default mqttClient