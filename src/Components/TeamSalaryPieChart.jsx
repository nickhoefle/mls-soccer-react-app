import React from 'react';
import playerSalaries from '../data/player-salaries.json';
import ReactApexChart from 'react-apexcharts';

const TeamSalaryPieChart = ({ team }) => {
    const teamPlayerObjs = playerSalaries.filter((player) => player.Squad === team);

    const labels = teamPlayerObjs.map((player) => player.Player);
    const data = teamPlayerObjs.map((player) =>
        Number(player['Annual Wages'].split('(')[0].slice(1).replace(',', '').replace(',', ''))
    );

    const chartOptions = {
        labels: labels,
        plotOptions: {
        pie: {
            donut: {
            size: '90%',
            },
        },
        },
        legend: {
            show: false, // Set to false to hide the player name list
          },
    };
    
    const chartSeries = data;
    
    return (
        <div className='flex justify-center'>
        <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="donut"
            width="700"
        />
        </div>
    );
    };
    
    export default TeamSalaryPieChart;
