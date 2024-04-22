import ReactApexChart from 'react-apexcharts';

const PlayerSpider = ({  }) => {

    const series = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 60, 70, 90],
    }];
    
    const options = {
        chart: {
        height: 350,
        type: 'radar',
        },
        xaxis: {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'],
        },
    };

    return (
        <ReactApexChart options={options} series={series} type="radar" height={350} />
    )
}

export default PlayerSpider