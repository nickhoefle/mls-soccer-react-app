import { getTeamLogoSrc } from '../teamLogoHelper';
import TeamRoster from './TeamRoster';
import TeamPastMatches from './TeamPastMatches';
import TeamSeasonGraph from './GoalDifferentialGraph';
import TeamSalaryPieChart from './TeamSalaryPieChart';
import TeamRecordByReferee from './TeamRecordByReferee';

import React from 'react'

const TeamRouteContent = ({ team, teamRecord, handleComponentClick, activeComponent }) => {
    return (
        <>
        <div className='flex justify-center lg:pt-2 md:pt-8'>
            <img src={getTeamLogoSrc(team)} alt={`${team} Logo`} className="flex justify-center h-32" />
        </div>
        <div className='flex justify-center'>
            <h2 className='text-white text-2xl bold font-bold'>{team}</h2>
        </div>
        <div className='flex justify-center'>
            <p className='text-white font-bold'>({teamRecord(team)})</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center lg:p-4">            
            <button
                className={`text-white text-lg py-2 md:mr-4 ${activeComponent === 'roster' ? 'underline font-bold' : ''}`}
                onClick={() => handleComponentClick('roster')}
            >
                Team Roster and Stats
            </button>
            <button
                className={`text-white text-lg py-2 md:mr-4 ${activeComponent === 'matches' ? 'underline font-bold' : ''}`}
                onClick={() => handleComponentClick('matches')}
            >
                Past Matches
            </button>
            <button
                className={`text-white text-lg py-2 md:mr-4 ${activeComponent === 'graph' ? 'underline font-bold' : ''}`}
                onClick={() => handleComponentClick('graph')}
            >
                Goal Differential Graph
            </button>
            <button
                className={`text-white text-lg py-2 md:mr-4 hidden md:block ${activeComponent === 'chart' ? 'underline font-bold' : ''}`}
                onClick={() => handleComponentClick('chart')}
            >
                Team Salary Chart
            </button>
            <button
                className={`text-white text-lg py-2 md:mr-4 ${activeComponent === 'referee' ? 'underline font-bold' : ''}`}
                onClick={() => handleComponentClick('referee')}
            >
                Wins/Losses by Referee
            </button>
        </div>
        {team && (
        <>
            {activeComponent === 'roster' && <TeamRoster team={team} />}
            {activeComponent === 'matches' && <TeamPastMatches team={team} />}
            {activeComponent === 'graph' && <TeamSeasonGraph team={team} />}
            {activeComponent === 'chart' && <TeamSalaryPieChart team={team} />}
            {activeComponent === 'referee' && <TeamRecordByReferee team={team} />}
        </>
            )}
        </>
    )
}
export default TeamRouteContent


