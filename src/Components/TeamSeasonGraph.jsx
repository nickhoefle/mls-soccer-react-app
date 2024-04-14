import React from 'react';
import ReactApexChart from 'react-apexcharts';
import allLeagueMatchesRawData from '../data/allLeagueMatchesRawData.json';
import { cleanAllLeagueMatchesRawData } from '../dataCleaner'; 

const allLeagueMatches = cleanAllLeagueMatchesRawData(allLeagueMatchesRawData);

const TeamSeasonGraph = ({ team }) => {
    
    const teamMatchesArray = allLeagueMatches.filter((match) => (match.HomeTeam === team || match.AwayTeam === team) && match.Score !== '');
    const datesArray = teamMatchesArray.map((teamMatch) => teamMatch.Date.slice(5));
    const goalDifferentialArray = [];

    teamMatchesArray.forEach((teamMatch) => {
        if (teamMatch.HomeTeam === team) {
            const homeScore = teamMatch.Score.split('–')[0];
            const awayScore = teamMatch.Score.split('–')[1];
            const goalDifference = parseInt(homeScore) - parseInt(awayScore);
            goalDifferentialArray.push(goalDifference);
        } else if (teamMatch.AwayTeam === team) {
            const homeScore = teamMatch.Score.split('–')[0];
            const awayScore = teamMatch.Score.split('–')[1];
            const goalDifference = parseInt(awayScore) - parseInt(homeScore);
            goalDifferentialArray.push(goalDifference);
        }
    });

    const opponentNamesArray = teamMatchesArray.map((teamMatch) => {
        return teamMatch.HomeTeam === team ? teamMatch.AwayTeam : teamMatch.HomeTeam;
    });

    const chartOptions = {
        colors: ['#ffffff'],
        chart: {
            id: 'team-season-chart',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: datesArray,
            labels: {
                style: {
                    colors: 'white',
                    fontSize: '12px'
                },
            },
            tickAmount: Math.ceil(datesArray.length / 2),
        },
        yaxis: {
            labels: {
                style: {
                    colors: 'white', 
                    fontSize: '14px'
                },
                formatter: function (value) {
                    return Math.round(value); 
                }
            },
        },
        markers: {
            size: 6,
        },
        tooltip: {
            shared: false,
            intersect: true,
            custom: function ({ dataPointIndex }) {
                const opponentName = opponentNamesArray[dataPointIndex];
                const goalDifference = goalDifferentialArray[dataPointIndex];
                const text = `${opponentName}: ${goalDifference}`;
                return `<div class="custom-tooltip">${text}</div>`;
            },
        },
    };
    const chartSeries = [
        {
            name: 'Goal Differential',
            data: goalDifferentialArray,
        },
    ];

    return (
        <div className="flex justify-center">
            <div className=" text-white rounded-lg p-4 w-screen lg:w-2/3 sm:w-1/1">
                <ReactApexChart
                    options={chartOptions}
                    series={chartSeries}
                    type="line"
                    height={300}
                />
            </div>
        </div>
    );
};

export default TeamSeasonGraph;
