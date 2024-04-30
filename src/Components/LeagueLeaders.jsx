import React from 'react'

import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../js-files/dataCleaner'; 

import leagueGoalkeeperStatsRawData from '../data/leagueGoalkeeperStatsRawData.json';
import { cleanGoalkeeperStats } from '../js-files/dataCleaner';

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);
const leagueGoalkeeperStats = cleanGoalkeeperStats(leagueGoalkeeperStatsRawData);

const LeagueLeaders = ({ handlePlayerClick }) => {

    const findTopFiveForStat = (jsonFile, stat) => {
        const sortedData = jsonFile.sort((a, b) => b[stat] - a[stat]);
        return sortedData.slice(0,5);
    };

    const topFiveAssists = findTopFiveForStat(leaguePlayersStandardStats, 'Assists'); 
    const topFiveGoals = findTopFiveForStat(leaguePlayersStandardStats, 'Goals'); 
    const topFiveSavePct = findTopFiveForStat(leagueGoalkeeperStats, 'SavePercent'); 
    
    return (
        <div className="hidden lg:block text-white text-center">
            <h1 className='text-center text-3xl pb-4'>Top Performers</h1>
            <div className='flex'>            
                <div>
                    <h1 className='text-xl underline pb-2'>Assists</h1>
                    <ul>
                        {topFiveAssists.map((topFivePlayer, index) => (
                            <li 
                                key={index} 
                                className='flex items-center justify-between text-lg' 
                                onClick={() => handlePlayerClick(topFivePlayer.Name)}
                            >
                                <label className='cursor-pointer'>
                                    {topFivePlayer.Name} ({topFivePlayer.Team})
                                </label>
                                <span className='pl-4 text-right text-lg cursor-pointer'>
                                    {topFivePlayer.Assists}
                                </span>
                            </li>
                        ))}
                    </ul>  
                </div>

                <div className='pl-20'>
                    <h1 className='pl-20 text-xl underline pb-2'>Goals</h1>
                    <ul>
                        {topFiveGoals.map((topFivePlayer, index) => (
                            <li 
                                key={index} 
                                className='flex items-center justify-between text-lg' 
                                onClick={() => handlePlayerClick(topFivePlayer.Name)}
                            >
                                <label className='cursor-pointer'>
                                    {topFivePlayer.Name} ({topFivePlayer.Team})
                                </label>
                                <span className='pl-4 text-right text-lg cursor-pointer'>
                                    {topFivePlayer.Goals}
                                </span>
                            </li>
                        ))}
                    </ul>  
                </div>

                <div className='pl-20'>
                    <h1 className='text-xl underline pb-2'>Save Percent</h1>
                    <ul>
                        {topFiveSavePct.map((topFivePlayer, index) => (
                            <li 
                                key={index} 
                                className='flex items-center justify-between text-lg'
                            >
                                <label>
                                    {topFivePlayer.Name} ({topFivePlayer.Team})
                                </label>
                                <span className='pl-4 text-right'>
                                    {topFivePlayer.SavePercent.toFixed(1)} %
                                </span>
                            </li>
                        ))}
                    </ul>  
                </div>
            </div>
        </div>
    );
};

export default LeagueLeaders