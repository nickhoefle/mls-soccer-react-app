import React from 'react'
import TeamDropdown1 from './TeamDropdown1'
import TeamDropdown2 from './TeamDropdown2';
import PlayerDropdown1 from './PlayerDropdown1';
import PlayerDropdown2 from './PlayerDropdown2';
import PlayerComparisonChart from './PlayerComparisonChart';

const PlayerComparisonSection = ({ teamName1, teamName2, handleTeamName1Select, handleTeamName2Select, playerToCompare1, playerToCompare2, handlePlayerToCompare1, handlePlayerToCompare2 }) => {
    
    return (
        <div className="flex flex-col justify-center">
            <div className='flex justify-center lg:pb-4'>
                <h2 className='text-white text-3xl pb-6'>Player Comparison</h2>
            </div>
            <div className='flex justify-center'>
                <div className='sm: w-[100%] md:flex lg:pb-0 w-3/4'>
                    <div className="text-white text-center lg:w-1/2 m-15">
                        <TeamDropdown1 handleTeamName1Select={handleTeamName1Select} />
                        {teamName1 && <PlayerDropdown1 teamName1={teamName1} handlePlayerToCompare1={handlePlayerToCompare1} />}
                    </div>
                    <div className="text-white text-center lg:w-1/2 m-15">
                        <TeamDropdown2 handleTeamName2Select={handleTeamName2Select} />
                        {teamName2 && <PlayerDropdown2 teamName2={teamName2} handlePlayerToCompare2={handlePlayerToCompare2} />}
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