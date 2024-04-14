import React from 'react'
import allLeagueMatchesRawData from '../data/allLeagueMatchesRawData.json';
import { cleanAllLeagueMatchesRawData } from '../dataCleaner'; 

const allLeagueMatches = cleanAllLeagueMatchesRawData(allLeagueMatchesRawData);

const TeamPastMatches = ({ team }) => {

    const teamMatchesArray = allLeagueMatches.filter((match) => (match.HomeTeam === team || match.AwayTeam === team) && match.Score !== "")

    return (
        <>
            <div className='lg:flex justify-center pb-10'>
                <table className="table-auto text-white text-xs md:text-base">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Home</th>
                            <th className="px-4 py-2">xG</th>
                            <th className="px-4 py-2">Score</th>
                            <th className="px-4 py-2">xG</th>
                            <th className="px-4 py-2">Away</th>
                        </tr>
                    </thead>
                    <tbody>
                    {teamMatchesArray.map((teamMatch) => (
                        <tr key={teamMatch.index} className='hover:bg-green-700'>
                            <td className="border-t border-b px-1 md:px-4 py-2 text-center">{teamMatch.Date.slice(5,10)}</td>
                            <td className="border-t border-b px-1 md:px-4 py-2 text-center">{teamMatch.HomeTeam}</td>
                            <td className="border-t border-b px-1 md:px-4 py-2 text-center">{teamMatch.HomeTeamExpectedGoals}</td>
                            <td className="border-t border-b px-1 md:px-4 py-2 text-center">{teamMatch.Score}</td>
                            <td className="border-t border-b px-1 md:px-4 py-2 text-center">{teamMatch.AwayTeamExpectedGoals}</td>
                            <td className="border-t border-b px-1 md:px-4 py-2 text-center">{teamMatch.AwayTeam}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </> 
    )
}

export default TeamPastMatches