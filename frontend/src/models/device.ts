import { GridColDef } from "@mui/x-data-grid"

export interface Device {
    id ?: number
    name : string 
    created_at ?: string
}

export interface DATA_TABLE_DEVICE {
    cols: GridColDef[]
    rows: Device[]
}