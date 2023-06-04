import React from 'react'
import shootingStats from '../data/shooting-stats.json'

const PlayerDropdown = ({ teamName, playerToCompare, setPlayerToCompare }) => {

    let teamPlayers = shootingStats.filter((player) => (player.Squad === teamName));
    teamPlayers.sort((a, b) => a.Pos.localeCompare(b.Pos));

    const handlePlayerToCompareChange = (event) => {
        setPlayerToCompare(event.target.value); 
    };

    
    return (
        <div>
            <p className='text-white'>Player</p>
            <select
            className='bg-black outline-white border-2 text-center w-300'
            value={playerToCompare}
            onChange={handlePlayerToCompareChange}
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

export default PlayerDropdown