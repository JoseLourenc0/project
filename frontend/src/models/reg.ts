export interface Reg {
    id: number
    device_id: number
    data: DataReg | string 
    Device: Device
    created_at?: string
}

export interface DataReg {
    air_humidity: number
    air_temperature: number
    soil_humidity: number
}

export interface Device {
    id: number
    name: string
    created_at?: string
}