import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers'
import TextField from '@mui/material/TextField'
import { Moment } from 'moment'

export const CustomDatePicker = (props: { dateValue: Moment | null, handleDateChange: (t : Moment | null) => any}) => {

    const {
        dateValue,
        handleDateChange
    } = props

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                label="Date"
                value={dateValue}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
} 