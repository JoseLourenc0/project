type serie_array_3_size = [Serie, Serie, Serie]

export interface Serie {
    name : string
    type : string
    data : number[]
}

export interface textTitle {
    text: string
}

export interface MultipleAxisDataBasic {
    series: serie_array_3_size
    options: {
        title: textTitle
        xaxis: {
            categories: string[]
        }
        yaxis: {title: textTitle}[]
    }
}