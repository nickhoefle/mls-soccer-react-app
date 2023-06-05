import React from 'react';
import ReactApexChart from 'react-apexcharts';
import pastMatches from '../data/past-matches.json';

const TeamSeasonGraph = ({ team }) => {
    
    const teamMatches = pastMatches.filter((match) => (match.Home === team || match.Away === team) && match.Score !== '');
    const datesArray = teamMatches.map((match) => match.Date.slice(5));
    const goalDifferences = [];

    teamMatches.forEach((match) => {
        if (match.Home === team) {
        const homeScore = match.Score.split('–')[0];
        const awayScore = match.Score.split('–')[1];
        const goalDifference = parseInt(homeScore) - parseInt(awayScore);
        goalDifferences.push(goalDifference);
        } else if (match.Away === team) {
        const homeScore = match.Score.split('–')[0];
        const awayScore = match.Score.split('–')[1];
        const goalDifference = parseInt(awayScore) - parseInt(homeScore);
        goalDifferences.push(goalDifference);
        }
    });

    const opponentNames = teamMatches.map((match) => {
        return match.Home === team ? match.Away : match.Home;
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
            title: {
                text: 'Match Date',
                style: {
                    color: 'white',
                    fontSize: '16px',
                },
            },
            categories: datesArray,
            labels: {
                style: {
                    colors: 'white',
                    fontSize: '12px'
                },
            },
        },
        yaxis: {
            title: {
                text: 'Goal Differential',
                style: {
                    color: 'white',
                    fontSize: '16px',
                },
            },
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
                const opponentName = opponentNames[dataPointIndex];
                const goalDifference = goalDifferences[dataPointIndex];
                const text = `${opponentName}: ${goalDifference}`;
        
                return `<div class="custom-tooltip">${text}</div>`;
            },
        },
    };
    const chartSeries = [
        {
            name: 'Goal Differential',
            data: goalDifferences,
        },
    ];

    return (
        <div className="flex justify-center bg-black opacity-75">
            <div className=" text-white rounded-lg p-4 w-1/2 mx-auto">
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
