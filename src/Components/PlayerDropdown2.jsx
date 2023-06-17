import React from 'react'
import shootingStats from '../data/shooting-stats.json'

const PlayerDropdown2 = ({ teamName2, playerToCompare2, setPlayerToCompare2 }) => {

    let teamPlayers = shootingStats.filter((player) => (player.Squad === teamName2));
    teamPlayers.sort((a, b) => a.Pos.localeCompare(b.Pos));

    const handlePlayerToCompareChange2 = (event) => {
        setPlayerToCompare2(event.target.value); 
    };

    
    return (
        <div>
            <p className='text-white'>Player</p>
            <select
            className='bg-black outline-white border-2 text-center w-300'
            value={playerToCompare2}
            onChange={handlePlayerToCompareChange2}
            >
                <option className='text-left'>Select:</option>
                    {teamPlayers.map((teamPlayer, index) => (
                <option
                key={index}
                value={teamPlayer.Player}
                className='text-center'
                >
                    {teamPlayer.Player} ({teamPlayer.Pos})
                </option>
            ))}
            </select>
        </div>
    )
}

export default PlayerDropdown2