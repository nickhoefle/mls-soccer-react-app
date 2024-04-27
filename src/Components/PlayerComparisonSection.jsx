import React from 'react'
import TeamDropdown from './TeamDropdown'
import TeamDropdown2 from './TeamDropdown2';
import PlayerDropdown1 from './PlayerDropdown1';
import PlayerDropdown2 from './PlayerDropdown2';
import PlayerComparisonChart from './PlayerComparisonChart';

const PlayerComparisonSection = ({ teamName1, teamName2, playerToCompare1, playerToCompare2, handlePlayerToCompare1, handlePlayerToCompare2, handleTeamNameSelect, handleTeamName2Select }) => {
    
    return (
        <div className="flex flex-col justify-center">
            <div className='flex justify-center lg:pb-4'>
                <h2 className='text-white text-3xl pb-6'>Player Comparison</h2>
            </div>
            <div className='flex justify-center'>
                <div className='sm: w-[100%] md:flex lg:pb-0 w-3/4'>
                    <div className="text-white text-center lg:w-1/2 m-15">
                        <TeamDropdown teamName={teamName1} setTeamName1={handleTeamNameSelect} />
                        {teamName1 && <PlayerDropdown1 teamName1={teamName1} playerToCompare1={playerToCompare1} handlePlayerToCompare1={handlePlayerToCompare1}/>}
                    </div>
                    <div className="text-white text-center lg:w-1/2 m-15">
                        <TeamDropdown2 teamName2={teamName2} setTeamName2={handleTeamName2Select} />
                        {teamName2 && <PlayerDropdown2 teamName2={teamName2} playerToCompare2={playerToCompare2} handlePlayerToCompare2={handlePlayerToCompare2}/>}
                    </div>
                </div>
            </div>
            <div className="text-white text-center lg:pb-10">
                {playerToCompare1 && playerToCompare2 && <PlayerComparisonChart playerToCompare1={playerToCompare1} playerToCompare2={playerToCompare2} />}
            </div>
        </div>
    )
}

export default PlayerComparisonSection