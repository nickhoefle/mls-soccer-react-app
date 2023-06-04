import React from 'react'
import pastMatches from '../data/past-matches.json';

const TeamPastMatches = ({ team }) => {

    const teamMatches = pastMatches.filter((match) => (match.Home === team || match.Away === team) && match.Score !== "")
    console.log(teamMatches);

    return (
        <>
        <h1 className='bg-black opacity-75 text-white text-2xl text-center pt-10'>Past Matches</h1>
        <div className='bg-black opacity-75 flex justify-center pb-10'>
            <table className="table-auto text-white">
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
                    {teamMatches.map((match) => (
                        <tr key={match.index} className='hover:bg-green-700'>
                            <td className="border px-4 py-2 text-center">{match.Date}</td>
                            <td className="border px-4 py-2 text-center">{match.Home}</td>
                            <td className="border px-4 py-2 text-center">{match.xG}</td>
                            <td className="border px-4 py-2 text-center">{match.Score}</td>
                            <td className="border px-4 py-2 text-center">{match.xG__1}</td>
                            <td className="border px-4 py-2 text-center">{match.Away}</td>
                        </tr>
                ))}
                    </tbody>
            </table>
        </div>
        </> 
    )
}

export default TeamPastMatches