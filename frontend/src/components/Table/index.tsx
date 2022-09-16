import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Device } from '../../models/device'
import moment from 'moment'

export const DataTable = (props: {tableData: {rows: Device[], cols: GridColDef[]}}) => {

    let { tableData } = props
    tableData.rows = tableData.rows.map(element => {
        element.created_at = moment(element.created_at).format('YYYY-MM-DD HH:mm:ss')
        return element
    })
    const [DATA_GRID, setDATA_GRID] = React.useState({
      rows: [...tableData.rows],
      cols: tableData.cols
    })

    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={DATA_GRID.rows}
            columns={DATA_GRID.cols}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        </div>
    )
}
