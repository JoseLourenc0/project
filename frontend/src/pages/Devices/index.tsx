import React from 'react'
import { DataTable } from "../../components/Table"
import { Device } from '../../models/reg'
import api from "../../utils/api"
import './style.css'

export const Devices = () => {

    const [Devices, setDevices] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        api.get('/devices').then(data => {
            if(data && data.data && data.data.length > 0) {
                const tempData = data.data
                setDevices(tempData)
            }
        })
    }

    return (
        <div className="devices-container">
            <div className="devices-table-container">
                {
                    !Devices || (Devices as Device[]).length == 0 ? '' : <DataTable tableData = {Devices}/>
                }
            </div>
        </div>
    )
}