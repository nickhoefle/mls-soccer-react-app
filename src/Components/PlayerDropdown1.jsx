import React from 'react'
import leaguePlayersShootingStatsRawData from '../data/leaguePlayersShootingStatsRawData.json';
import { cleanShootingStats } from '../dataCleaner'; 

const leaguePlayersShootingStats = cleanShootingStats(leaguePlayersShootingStatsRawData);

const PlayerDropdown1 = ({ teamName1, playerToCompare, setPlayerToCompare1 }) => {

    let teamPlayers = leaguePlayersShootingStats
        .filter((teamPlayer) => (teamPlayer.Team === teamName1))
        .sort((a, b) => a.Position.localeCompare(b.Position));

    const handlePlayerToCompareChange = (e) => {
        setPlayerToCompare1(e.target.value); 
    };

    
    return (
        <div>
            <p className='text-white'>Player</p>
            <select
                className='bg-black outline-white border-2 text-center w-300'
                value={playerToCompare}
                onChange={handlePlayerToCompareChange}
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

export default PlayerDropdown1