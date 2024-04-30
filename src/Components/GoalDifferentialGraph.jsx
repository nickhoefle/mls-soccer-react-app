import React from 'react';
import ReactApexChart from 'react-apexcharts';
import allLeagueMatchesRawData from '../data/allLeagueMatchesRawData.json';
import { cleanAllLeagueMatchesRawData } from '../dataCleaner';
import { convertNumMonthToWord } from '../convertNumMonthToWord'; 
import { getTeamLogoSrc } from '../teamLogoHelper';

const allLeagueMatches = cleanAllLeagueMatchesRawData(allLeagueMatchesRawData);

const TeamSeasonGraph = ({ team }) => {
    
    const teamMatchObjsArray = allLeagueMatches.filter(
        (match) => (match.HomeTeam === team || match.AwayTeam === team) && match.Score !== ''
    );
    
    const datesArray = teamMatchObjsArray.map(
        (teamMatch) => teamMatch.Date.slice(5)
    );

    const opponentNamesArray = teamMatchObjsArray.map(
        (teamMatch) => {
            return teamMatch.HomeTeam === team ? teamMatch.AwayTeam : teamMatch.HomeTeam;
        }
    );

    const homeOrAwayArray = [];
    const homeScoreArray = [];
    const awayScoreArray = [];
    const goalDifferentialArray = [];

    teamMatchObjsArray.forEach((teamMatch) => {
        const homeScore = teamMatch.Score.split('–')[0];
        homeScoreArray.push(homeScore);
        const awayScore = teamMatch.Score.split('–')[1];
        awayScoreArray.push(awayScore);

        if (teamMatch.HomeTeam === team) {
            const goalDifference = parseInt(homeScore) - parseInt(awayScore);
            goalDifferentialArray.push(goalDifference);
            homeOrAwayArray.push('vs.');
        } else if (teamMatch.AwayTeam === team) {
            const goalDifference = parseInt(awayScore) - parseInt(homeScore);
            goalDifferentialArray.push(goalDifference);
            homeOrAwayArray.push('@');
        }
    });

    const chartOptions = {
        colors: ['white'],
        chart: {
            toolbar: {
                show: false,
            },
        },      
        xaxis: {
            categories: datesArray,
            labels: {
                style: {
                    fontSize: '16px',
                    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji`,
                    colors: 'white',
                },

            },
            tooltip: {
                enabled: false,
            },
            tickAmount: Math.ceil(datesArray.length / 2),
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '16px',
                    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji`,
                    colors: 'white',
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
            followCursor: true,
            custom: function ({ dataPointIndex }) {
                
                const numDate = datesArray[dataPointIndex];
                const dateWithWordMonth = convertNumMonthToWord(numDate);

                const homeOrAway = homeOrAwayArray[dataPointIndex];
                const opponentName = opponentNamesArray[dataPointIndex];
                
                const teamIconSrc = getTeamLogoSrc(team);
                const opponentIconSrc = getTeamLogoSrc(opponentName);

                const homeScore = homeScoreArray[dataPointIndex];
                const awayScore = awayScoreArray[dataPointIndex];

                const isHome = homeOrAway === 'vs.'
                
                if (isHome) {
                    return `<span class="match-tooltip-date">
                                ${dateWithWordMonth}
                            </span>
                            <div class="match-tooltip-score">
                                ${homeOrAway} ${opponentName}
                            </div>
                            <div class='match-tooltip-scores-container'>
                                <div class='match-tooltip-icon-and-score-wrapper'>
                                    <img
                                        class='match-tooltip-logo'
                                        src=${teamIconSrc} 
                                    />
                                    <p class='match-tooltip-score'>
                                        ${homeScore}
                                    </p>
                                </div>
                                <div class='match-tooltip-icon-and-score-wrapper'>
                                    <img
                                        class='match-tooltip-logo'
                                        src=${opponentIconSrc} 
                                    />
                                    <p class='match-tooltip-score'>
                                        ${awayScore}
                                    </p>
                                </div>
                            </div>`;
                } else {
                    return `<span class="match-tooltip-date">
                                ${dateWithWordMonth}
                            </span>
                            <div class="match-tooltip-score">
                                ${homeOrAway} ${opponentName}
                            </div>
                            <div class='match-tooltip-scores-container'>
                                <div class='match-tooltip-icon-and-score-wrapper'>
                                    <img
                                        class='match-tooltip-logo'
                                        src=${opponentIconSrc} 
                                    />
                                    <p class='match-tooltip-score'>
                                        ${homeScore}
                                    </p>
                                </div>
                                <div class='match-tooltip-icon-and-score-wrapper'>
                                    <img
                                        class='match-tooltip-logo'
                                        src=${teamIconSrc} 
                                    />
                                    <p class='match-tooltip-score'>
                                        ${awayScore}
                                    </p>
                                </div>
                            </div>`;
                }
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
