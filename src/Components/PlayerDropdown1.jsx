import React from 'react'
import leaguePlayersShootingStatsRawData from '../data/leaguePlayersShootingStatsRawData.json';
import { cleanShootingStats } from '../dataCleaner'; 

const leaguePlayersShootingStats = cleanShootingStats(leaguePlayersShootingStatsRawData);

const PlayerDropdown1 = ({ teamName1, playerToCompare1, handlePlayerToCompare1 }) => {

    let teamPlayers = leaguePlayersShootingStats
        .filter((leaguePlayer) => (leaguePlayer.Team === teamName1))
        .sort((a, b) => a.Position.localeCompare(b.Position));

    const handlePlayerToCompareChange = (e) => {
        handlePlayerToCompare1(e.target.value); 
    };
    
    return (
        <div>
            <select
                className='bg-black outline-white border-2 p-1 text-center text-xl w-1/2'
                value={playerToCompare1}
                onChange={handlePlayerToCompareChange}
            >
                <option className='text-center'>- Players -</option>
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