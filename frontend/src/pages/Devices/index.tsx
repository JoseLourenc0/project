import React from 'react'
import { DataTable as DataTableComponent } from "../../components/Table"
import { DATA_TABLE_DEVICE } from '../../models/device'
import { Device } from '../../models/device'
import api from "../../services/api"
import './style.css'

export const Devices = () => {

    const [DataTable, setDataTable] = React.useState<DATA_TABLE_DEVICE>()

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        api.get('/devices').then(data => {
            if(data && data.data && data.data.length > 0) {
                const tempData = data.data
                setDataTable({
                    rows: tempData,
                    cols: [
                        { field: 'id', headerName: 'ID', flex: 1, width: 150 },
                        { field: 'name', headerName: 'Name', flex: 1, width: 200 },
                        { field: 'protocol', headerName: 'Protocol', flex: 1, width: 200 },
                        { field: 'created_at', headerName: 'Created At', flex: 1, width: 200 }
                    ]
                })
            }
        })
    }

    return (
        <div className="devices-container">
            <div className="devices-table-container">
                {
                    !DataTable || (DataTable.rows as Device[]).length == 0 ? '' : <DataTableComponent tableData = {DataTable}/>
                }
            </div>
        </div>
    )
}