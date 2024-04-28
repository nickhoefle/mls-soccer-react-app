import React from 'react';
import ReactApexChart from 'react-apexcharts';
import allLeagueMatchesRawData from '../data/allLeagueMatchesRawData.json';
import { cleanAllLeagueMatchesRawData } from '../dataCleaner';
import { convertNumMonthToWord } from '../convertNumMonthToWord'; 

const allLeagueMatches = cleanAllLeagueMatchesRawData(allLeagueMatchesRawData);

const TeamSeasonGraph = ({ team }) => {
    
    const teamMatchesArray = allLeagueMatches.filter((match) => (match.HomeTeam === team || match.AwayTeam === team) && match.Score !== '');
    const datesArray = teamMatchesArray.map((teamMatch) => teamMatch.Date.slice(5));
    const goalDifferentialArray = [];
    const homeOrAwayArray = [];

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

    teamMatchesArray.forEach((teamMatch) => {
        if (teamMatch.HomeTeam === team) {
            homeOrAwayArray.push('vs.');
        } else {
            homeOrAwayArray.push('@');
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
                    fontSize: '16px',
                    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji`,
                },
                offsetY: 5,
            },
            tooltip: {
                enabled: false,
            },
            tickAmount: Math.ceil(datesArray.length / 2),
        },
        yaxis: {
            labels: {
                style: {
                    colors: 'white',
                    fontSize: '16px',
                    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji`,
                },
                formatter: function (value) {
                    return Math.round(value); 
                },
                offsetX: -8,
                offsetY: -1
            },
        },
        markers: {
            size: 8,
        },
        tooltip: {
            shared: false,
            intersect: true,
            custom: function ({ dataPointIndex }) {
                
                const opponentName = opponentNamesArray[dataPointIndex];
                const goalDifference = goalDifferentialArray[dataPointIndex];
                const homeOrAway = homeOrAwayArray[dataPointIndex];
                
                const date = datesArray[dataPointIndex];
                const dateWithWordMonth = convertNumMonthToWord(date);

                const text = `${homeOrAway} ${opponentName}`;
                
                return `
                        <span class="match-tooltip-date">
                            ${dateWithWordMonth}
                        </span>
                        <div class="match-tooltip-score">
                            ${text}
                        </div>`;
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
                    width={'100%'}
                />
            </div>
        </div>
    );
};

export default TeamSeasonGraph;
