import React from 'react'
import leaguePlayersShootingStatsRawData from '../data/leaguePlayersShootingStatsRawData.json';
import { cleanShootingStats } from '../dataCleaner'; 

const leaguePlayersShootingStats = cleanShootingStats(leaguePlayersShootingStatsRawData);

const PlayerDropdown2 = ({ teamName2, playerToCompare2, setPlayerToCompare2 }) => {

    let teamPlayers = leaguePlayersShootingStats
    .filter((leaguePlayer) => (leaguePlayer.Team === teamName2))
    .sort((a, b) => a.Position.localeCompare(b.Position));

    const handlePlayerToCompareChange2 = (e) => {
        setPlayerToCompare2(e.target.value); 
    };

    
    return (
        <div>
            <p className='text-white'>Player</p>
            <select
                className='bg-black outline-white border-2 text-center w-300'
                value={playerToCompare2}
                onChange={handlePlayerToCompareChange2}
            >
                <option 
                    className='text-left'
                >
                    Select:
                </option>
                {teamPlayers.map((teamPlayer, index) => (
                <option
                    key={index}
                    value={teamPlayer.Name}
                    className='text-center'
                >
                    {teamPlayer.Name} ({teamPlayer.Position})
                </option>
            ))}
            </select>
        </div>
    )
}

export default PlayerDropdown2