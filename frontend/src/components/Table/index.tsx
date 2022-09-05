import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Device } from '../../models/reg';
import moment from 'moment';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'created_at', headerName: 'Created At', width: 200 }
];

const rows = [
  { id: 1, created_at: 'Snow', name: 'Jon', age: 35 },
  { id: 2, created_at: 'Lannister', name: 'Cersei', age: 42 },
  { id: 3, created_at: 'Lannister', name: 'Jaime', age: 45 },
  { id: 4, created_at: 'Stark', name: 'Arya', age: 16 }
];

export const DataTable = (props: {tableData: Device[]}) => {

    let { tableData } = props
    tableData = tableData.map(element => {
        element.created_at = moment(element.created_at).format('YYYY-MM-DD')
        return element
    })
    const [Rows, setRows] = React.useState([...tableData])

    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={Rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        </div>
    )
}
