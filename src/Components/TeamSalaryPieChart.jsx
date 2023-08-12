import React from 'react';
import leaguePlayerSalariesRawData from '../data/leaguePlayerSalariesRawData.json';
import { cleanPlayerSalariesRawData } from '../dataCleaner'; 
import ReactApexChart from 'react-apexcharts';

const allPlayersSalaries = cleanPlayerSalariesRawData(leaguePlayerSalariesRawData);

const TeamSalaryPieChart = ({ team }) => {
    
    const teamPlayersSalaryArrayUncleaned = allPlayersSalaries.filter((player) => player.Team === team); 
    
    const teamPlayerNames = teamPlayersSalaryArrayUncleaned.map((player) => player.Name);
    
    const teamPlayersSalaryArrayCleaned = teamPlayersSalaryArrayUncleaned.map((player) =>
        Number(player.AnnualWages.split('(')[0].slice(1).replace(',', '').replace(',', ''))  // Uncleaned AnnualWages data format = $x (€y, £z)
    );
    
    const tooltipSalaries = teamPlayersSalaryArrayCleaned.map((number) => number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD', 
        minimumFractionDigits: 0, // No cents
        maximumFractionDigits: 0  // No cents
    }));

    const chartOptions = {
        labels: teamPlayerNames,
        plotOptions: {
            pie: {
                donut: {
                    size: '90%'
                },
            },
        },
        legend: {
            show: false, // Set to false to hide the player name list
        },
        tooltip: {
            custom: function ({ seriesIndex }) {
                const salary = tooltipSalaries[seriesIndex];
                const player = teamPlayerNames[seriesIndex];
                return `<div style="font-size: 20px">${player}: ${salary}</div>`;
            },
        },
    };
        
    if (teamPlayersSalaryArrayCleaned.length === 0) {
        return (
            <div className='flex justify-center bg-black text-xl text-white pt-5 pb-5'>Salary data not available.</div>  // No Salary Data on FBRef for STL/MTL
        )
    }
    return (
        <div className='flex justify-center'>
            <ReactApexChart
                options={chartOptions}
                series={teamPlayersSalaryArrayCleaned}
                type="donut"
                width="700"
            />
        </div>
    );
};
    
export default TeamSalaryPieChart;
