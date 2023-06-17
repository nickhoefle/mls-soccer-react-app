import React from 'react'
import standardStats from '../data/player-standard-stats.json';
import goalkeepingStats from '../data/goalkeeping.json';

const LeagueLeaders = ({ setPlayer }) => {

    const handlePlayerClick = (playerName) => {
        setPlayer(playerName);
    };

    const findTopFiveForStat = (jsonFile, stat) => {
        const sortedData = jsonFile.sort((a, b) => b[stat] - a[stat]);
        return sortedData.slice(0,5);
    };

    const topFiveAssists = findTopFiveForStat(standardStats, 'Ast'); 
    const topFiveGoals = findTopFiveForStat(standardStats, 'Gls'); 
    const topFiveSavePct = findTopFiveForStat(goalkeepingStats, 'Save%'); 
    
    return (
        <>
            <h1 className='text-center text-2xl pb-4'>Top Performers</h1>
            <div className='flex'>            
                <div>
                    <h1 className='underline'>Assists</h1>
                    <ul>
                        {topFiveAssists.map((player, index) => (
                        <li key={index} className='flex items-center justify-between hover:cursor-pointer' onClick={() => handlePlayerClick(player.Player)}>
                            {player.Player} ({player.Squad})
                            <span className='pl-4 text-right'>{player.Ast}</span>
                        </li>
                        ))}
                    </ul>  
                </div>

                <div className='pl-20'>
                    <h1 className='underline'>Goals</h1>
                    <ul>
                        {topFiveGoals.map((player, index) => (
                        <li key={index} className='flex items-center justify-between hover:cursor-pointer' onClick={() => handlePlayerClick(player.Player)}>
                            {player.Player} ({player.Squad})
                            <span className='pl-4 text-right'>{player.Gls}</span>
                        </li>
                        ))}
                    </ul>  
                </div>

                <div className='pl-20'>
                    <h1 className='underline'>Save Percent</h1>
                    <ul>
                        {topFiveSavePct.map((player, index) => (
                        <li key={index} className='flex items-center justify-between'>
                            {player.Player} ({player.Squad})
                            <span className='pl-4 text-right'>{player['Save%'].toFixed(1)} %</span>
                        </li>
                        ))}
                    </ul>  
                </div>
            </div>
        </>
    );
};

export default LeagueLeaders