import React from 'react'
import moment from 'moment'
import { MultipleYAxisChart } from '../../components/Charts'
import { Reg } from '../../models/reg'
import api from "../../services/api"
import './style.css'
import { MultipleAxisDataBasic } from '../../models/charts'

export const Home = () => {

    const [AllRegs, setAllRegs] = React.useState<Reg[]>([])
    const [filteredRegs, setFilteredRegs] = React.useState<Reg[]>([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = (date: null | string= null) => {
        api.get(`/regs/1${date ? '?date='+date : ''}`).then(data => {
            if(data && data.data && data.data.length > 0) {
                const tempData: Reg[] = data.data.map((element: Reg) => {
                    if(typeof element.data === 'string') element.data = JSON.parse(element.data)
                    return element
                })
                setAllRegs(tempData)
                setFilteredRegs(tempData)
            }
        })
    }

    const getChartData = () => {
        const CHART_CONFIG: MultipleAxisDataBasic = {
            series: [
                {
                    name: "Air Humidity",
                    type: "column",
                    data: filteredRegs.map(element => typeof element.data === 'string' ? JSON.parse(element.data).air_humidity.toFixed(2) : element.data.air_humidity.toFixed(2) ),
                  },
                  {
                    name: "Soil Humidity",
                    type: "column",
                    data: filteredRegs.map(element => typeof element.data === 'string' ? JSON.parse(element.data).soil_humidity.toFixed(2) : element.data.soil_humidity.toFixed(2) ),
                  },
                  {
                    name: "Air Temperature",
                    type: "line",
                    data: filteredRegs.map(element => typeof element.data === 'string' ? JSON.parse(element.data).air_temperature.toFixed(2) : element.data.air_temperature.toFixed(2) ),
                  }
            ],
            options: {
                title: {
                    text: "Device " + filteredRegs[0].Device.name + ' - ( ' + moment(filteredRegs[0].created_at).format('YYYY-MM-DD HH:mm:ss') + ' ~ ' + moment(filteredRegs[filteredRegs.length-1].created_at).format('YYYY-MM-DD HH:mm:ss') + ' )'
                },
                xaxis: {
                    categories: filteredRegs.map(e => moment(e.created_at).format('DD/MM/YYYY HH:mm:ss')),
                },
                yaxis: [
                    {
                        title: {
                            text: 'Air Humidity (%)'
                        }
                    },
                    {
                        title: {
                            text: 'Soil Humidity (%)'
                        }
                    },
                    {
                        title: {
                            text: 'Air Temperature (°C)'
                        }
                    }
                ]
            }
        }

        return CHART_CONFIG
    }

    return (
        <div className="home-contaienr">
            <div className="home-chart-container">
            {
                !filteredRegs || (filteredRegs as Reg[]).length == 0 ? '' : <MultipleYAxisChart CHART_CONFIG={getChartData()} />
            }
            </div>
        </div>
    )
}