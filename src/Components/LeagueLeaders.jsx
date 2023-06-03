import React from 'react'
import data from '../csvjson.json';
import goalkeeping from '../goalkeeping.json';

const LeagueLeaders = ({ setPlayer }) => {

    const handlePlayerClick = (playerName) => {
        setPlayer(playerName);
    };

    const findPlayerWithMaxValue = (data, maxProperty) => {
        const sortedData = data.sort((a, b) => b[maxProperty] - a[maxProperty]);
        return sortedData.slice(0,5);
    };

    const topFiveAssists = findPlayerWithMaxValue(data, 'Ast'); 
    const topFiveGoals = findPlayerWithMaxValue(data, 'Gls'); 
    const topFiveSavePct = findPlayerWithMaxValue(goalkeeping, 'Save%'); 
    
    return (
        <>
            <h1 className='text-center text-2xl'>Top Performers</h1>
            <br></br>
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