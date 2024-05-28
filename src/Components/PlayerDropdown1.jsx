import React from 'react'
import leaguePlayersShootingStatsRawData from '../data/leaguePlayersShootingStatsRawData.json';
import { cleanShootingStats } from '../js-files/dataCleaner'; 

const leaguePlayersShootingStats = cleanShootingStats(leaguePlayersShootingStatsRawData);

const PlayerDropdown1 = ({ teamName1, setPlayerToCompare1 }) => {

    let teamPlayers = leaguePlayersShootingStats
        .filter((leaguePlayer) => (leaguePlayer.Team === teamName1))
        .sort((a, b) => a.Position.localeCompare(b.Position));

    const handlePlayerToCompareChange = (e) => {
        setPlayerToCompare1(e.target.value); 
    };
    
    return (
        <div>
            <select
                className='bg-black outline-white border-2 p-1 text-center text-xl sm: w-[85%] lg:w-[55%]'
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