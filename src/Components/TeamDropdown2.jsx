import React from 'react';
import mlsTeamsArray from '../data/mlsTeamsArray.js';

const TeamDropdown2 = ({ teamName2, setTeamName2 }) => { 

    const handleTeam2Change = (e) => {
        setTeamName2(e.target.value); 
    };

    return (
        <div>
            <h2 className='text-2xl underline pb-6'>Player 2</h2>
            <select
                className='bg-black text-xl outline-white border-2 p-1 mb-6 w-1/3'
                value={teamName2}
                onChange={handleTeam2Change}
            >
                <option className='text-center underline mb-6'>- Team -</option>
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
