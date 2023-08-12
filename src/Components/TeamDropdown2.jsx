import React from 'react';
import mlsTeamsArray from '../data/mlsTeamsArray.js';

const TeamDropdown2 = ({ teamName2, setTeamName2 }) => { 

    const handleTeam2Change = (e) => {
        setTeamName2(e.target.value); 
    };

    return (
        <div>
            <h2 className='underline'>Player 2</h2>
            <p>Team</p>
            <select
                className='bg-black outline-white border-2 w-300'
                value={teamName2}
                onChange={handleTeam2Change}
            >
                <option>Select:</option>
                {mlsTeamsArray.map((team, index) => (
                    <option
                        key={index}
                        value={team}
                        className='text-center'
                    >
                        {team}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TeamDropdown2;
