import React from 'react'
import { useLocation } from "react-router-dom"
import { Device } from "../../../../models/device"
import mqttClient from "../../../../services/mqttClient"
import './styles.css'

interface SData {
    data: Device
}

export const DeviceDetails = () => {

    const { state } = useLocation()
    // const [messages, setMessages] = React.useState<any>([])
    // const [connectionStatus, setConnectionStatus] = React.useState(false)
    console.log(state)
    // React.useEffect(() => {
    //     mqttClient.client.on('connect', () => {
    //         handleConnStatus(true)
    //         mqttClient.client.subscribe(`${mqttClient.env}/${(state as SData).data.name}`)
    //     })
    //     mqttClient.client.on('message', (topic, message) =>{
    //         setMessages((prevState: any) => [...prevState, message])
    //         console.log(message)
    //     })
    // },[])

    // const handleConnStatus = (s: boolean) => setConnectionStatus(s)

    return (
        <div className="device-details-container">
            Building component...
        </div>
    )
}