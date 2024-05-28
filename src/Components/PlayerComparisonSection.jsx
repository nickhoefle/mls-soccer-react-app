import React from 'react'
import TeamDropdown1 from './TeamDropdown1'
import TeamDropdown2 from './TeamDropdown2';
import PlayerDropdown1 from './PlayerDropdown1';
import PlayerDropdown2 from './PlayerDropdown2';
import PlayerComparisonChart from './PlayerComparisonChart';

const PlayerComparisonSection = ({ teamName1, teamName2, setTeamName1, setTeamName2, playerToCompare1, playerToCompare2, setPlayerToCompare1, setPlayerToCompare2 }) => {
    
    return (
        <div className="flex flex-col justify-center">
            <div className='flex justify-center lg:pb-4'>
                <h2 className='text-white text-3xl pb-6'>Player Comparison</h2>
            </div>
            <div className='flex justify-center'>
                <div className='sm: w-[100%] md:flex lg:pb-0 w-3/4'>
                    <div className="text-white text-center lg:w-1/2 m-15">
                        <TeamDropdown1 setTeamName1={setTeamName1} />
                        {teamName1 && <PlayerDropdown1 teamName1={teamName1} setPlayerToCompare1={setPlayerToCompare1} />}
                    </div>
                    <div className="text-white text-center lg:w-1/2 m-15">
                        <TeamDropdown2 setTeamName2={setTeamName2} />
                        {teamName2 && <PlayerDropdown2 teamName2={teamName2} setPlayerToCompare2={setPlayerToCompare2} />}
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