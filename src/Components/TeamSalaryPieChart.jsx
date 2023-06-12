import React from 'react';
import playerSalaries from '../data/player-salaries.json';
import ReactApexChart from 'react-apexcharts';

const TeamSalaryPieChart = ({ team }) => {
    const teamPlayerObjs = playerSalaries.filter((player) => player.Squad === team);
    const players = teamPlayerObjs.map((player) => player.Player);
    const salaries = teamPlayerObjs.map((player) =>
        Number(player['Annual Wages'].split('(')[0].slice(1).replace(',', '').replace(',', ''))
    );
    const formattedSalaries = salaries.map((number) => number.toLocaleString(undefined, { 
        style: 'currency', 
        currency: 'USD', 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
    }));

    const chartOptions = {
        labels: players,
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
        tooltip: {
            custom: function ({ seriesIndex }) {
                const salary = formattedSalaries[seriesIndex];
                const player = players[seriesIndex];
                return `<div style="font-size: 20px">${player}: ${salary}</div>`;
            },
        },
    };
    
    const chartSeries = salaries;
    
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
