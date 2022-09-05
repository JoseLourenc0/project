import React from 'react'
import ReactApexChart from "react-apexcharts";
import { Reg } from '../../models/reg';
import moment from 'moment'

export const MultipleYAxisChart = (props: {chartData: Reg[]}) => {
    const { chartData } = props

    const [Series, setSeries] = React.useState([
      {
        name: "Air Humidity",
        type: "column",
        data: chartData.map(element => typeof element.data === 'string' ? JSON.parse(element.data).air_humidity.toFixed(2) : element.data.air_humidity.toFixed(2) ),
      },
      {
        name: "Soil Humidity",
        type: "column",
        data: chartData.map(element => typeof element.data === 'string' ? JSON.parse(element.data).soil_humidity.toFixed(2) : element.data.soil_humidity.toFixed(2) ),
      },
      {
        name: "Air Temperature",
        type: "line",
        data: chartData.map(element => typeof element.data === 'string' ? JSON.parse(element.data).air_temperature.toFixed(2) : element.data.air_temperature.toFixed(2) ),
      },
    ])
    const [Options, setOptions] = React.useState({
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1, 4],
        },
        title: {
          text: "Device " + props.chartData[0].Device.name + ' - ( ' + moment(chartData[0].created_at).format('YYYY-MM-DD HH:mm:ss') + ' ~ ' + moment(chartData[chartData.length-1].created_at).format('YYYY-MM-DD HH:mm:ss') + ' )',
          align: "left",
          offsetX: 110,
        },
        xaxis: {
          categories: chartData.map(e => moment(e.created_at).format('DD/MM/YYYY HH:mm:ss')),
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#008FFB",
            },
            labels: {
              style: {
                colors: "#008FFB",
              },
            },
            title: {
              text: "Air Humidity (%)",
              style: {
                color: "#008FFB",
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            seriesName: "Income",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#00E396",
            },
            labels: {
              style: {
                colors: "#00E396",
              },
            },
            title: {
              text: "Soil Humidity (%)",
              style: {
                color: "#00E396",
              },
            },
          },
          {
            seriesName: "DATA",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#FEB019",
            },
            labels: {
              style: {
                colors: "#FEB019",
              },
            },
            title: {
              text: "Air Temperature (°C)",
              style: {
                color: "#FEB019",
              },
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
      })

    return (
        <div id="chart">
        <ReactApexChart
          options={Options}
          series={Series}
          type="line"
          height={350}
        />
      </div>
    )
}
