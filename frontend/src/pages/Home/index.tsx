import React from 'react'
import { MultipleYAxisChart } from '../../components/Charts'
import { Reg } from '../../models/reg'
import api from "../../utils/api"
import './style.css'

export const Home = () => {

    const [AllRegs, setAllRegs] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = (date: null | string= null) => {
        api.get(`/regs/1${date ? '?date='+date : ''}`).then(data => {
            if(data && data.data && data.data.length > 0) {
                const tempData = data.data.map((element: Reg) => {
                    if(typeof element.data === 'string') element.data = JSON.parse(element.data)
                    return element
                })
                setAllRegs(tempData)
            }
        })
    }

    return (
        <div className="home-contaienr">
            <div className="home-chart-container">
            {
                !AllRegs || (AllRegs as Reg[]).length == 0 ? '' : <MultipleYAxisChart chartData={AllRegs} />
            }
            </div>
        </div>
    )
}