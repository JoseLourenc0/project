import React from 'react'
import ReactApexChart from "react-apexcharts";

export const MultipleYAxisChart = (props: {CHART_CONFIG: any}) => {
    const basicOptions = {
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
        text: "",
        align: "left",
        offsetX: 110,
      },
      xaxis: {
        categories: [],
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
            text: "",
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
            text: "",
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
            text: "",
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
      }
    }

    const [chartConfig, setChartConfig] = React.useState<null | any>(false)

    React.useEffect(() => {
      if(props.CHART_CONFIG) {
        const { CHART_CONFIG } = props
        const temp = {
          series: [...CHART_CONFIG.series],
          options: {
            ...basicOptions
          }
        }
        temp.options.yaxis.forEach((e, i)=> e.title = CHART_CONFIG.options.yaxis[i].title)
        temp.options.xaxis = CHART_CONFIG.options.xaxis
        temp.options.title.text = CHART_CONFIG.options.title.text
        setChartConfig(temp)
      }
    }, [props])

    return (
      <div className="multiple-data-chart">
        {
          chartConfig && 
          <ReactApexChart
            options={chartConfig.options}
            series={chartConfig.series}
            type="line"
            height={350}
          />
        }
      </div>
    )
}
