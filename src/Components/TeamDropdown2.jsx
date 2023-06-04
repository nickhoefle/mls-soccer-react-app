import React, { useState } from 'react';
import teamArray from '../data/teamArray.js';

const TeamDropdown2 = ({ teamName2, setTeamName2 }) => { 

    const handleTeam2Change = (event) => {
        setTeamName2(event.target.value); 
    };

    return (
        <div>
        <p>Team</p>
        <select
            className='bg-black outline-white border-2 w-300'
            value={teamName2}
            onChange={handleTeam2Change}
        >
            <option className='text-left'>Select:</option>
            {teamArray.map((team2, index) => (
            <option
                key={index}
                value={team2}
                className='text-center'
            >
                {team2}
            </option>
            ))}
        </select>
        </div>
    );
};

export default TeamDropdown2;
