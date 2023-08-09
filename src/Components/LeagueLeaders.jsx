import React from 'react'

import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../dataCleaner'; 

import leagueGoalkeeperStatsRawData from '../data/leagueGoalkeeperStatsRawData.json';
import { cleanGoalkeeperStats } from '../dataCleaner';

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);
const leagueGoalkeeperStats = cleanGoalkeeperStats(leagueGoalkeeperStatsRawData);

const LeagueLeaders = ({ setPlayer }) => {

    const handlePlayerClick = (playerName) => {
        setPlayer(playerName);
    };

    const findTopFiveForStat = (jsonFile, stat) => {
        const sortedData = jsonFile.sort((a, b) => b[stat] - a[stat]);
        return sortedData.slice(0,5);
    };

    const topFiveAssists = findTopFiveForStat(leaguePlayersStandardStats, 'Assists'); 
    const topFiveGoals = findTopFiveForStat(leaguePlayersStandardStats, 'Goals'); 
    const topFiveSavePct = findTopFiveForStat(leagueGoalkeeperStats, 'SavePercent'); 
    
    return (
        <>
            <h1 className='text-center text-2xl pb-4'>Top Performers</h1>
            <div className='flex'>            
                <div className='pl-14'>
                    <h1 className='underline'>Assists</h1>
                    <ul>
                        {topFiveAssists.map((topFivePlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between hover:cursor-pointer' 
                            onClick={() => handlePlayerClick(topFivePlayer.Name)}
                        >
                            {topFivePlayer.Name} ({topFivePlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topFivePlayer.Assists}
                        </span>
                        </li>
                        ))}
                    </ul>  
                </div>

                <div className='pl-20'>
                    <h1 className='underline'>Goals</h1>
                    <ul>
                        {topFiveGoals.map((topFivePlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between hover:cursor-pointer' 
                            onClick={() => handlePlayerClick(topFivePlayer.Name)}
                        >
                            {topFivePlayer.Name} ({topFivePlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topFivePlayer.Goals}
                        </span>
                        </li>
                        ))}
                    </ul>  
                </div>

                <div className='pl-20'>
                    <h1 className='underline'>Save Percent</h1>
                    <ul>
                        {topFiveSavePct.map((topFivePlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between'
                        >
                            {topFivePlayer.Name} ({topFivePlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topFivePlayer.SavePercent.toFixed(1)} %</span>
                        </li>
                        ))}
                    </ul>  
                </div>
            </div>
        </>
    );
};

export default LeagueLeaders