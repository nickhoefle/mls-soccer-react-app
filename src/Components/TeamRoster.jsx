import React from 'react'
import data from '../data/player-standard-stats.json';

const TeamRoster = ({ team, setPlayer }) => {

    const teamPlayers = data.filter((player) => player.Squad === team);

    const handlePlayerClick = (playerName) => {
        setPlayer(playerName);
    };

    return (
        <>
        <h1 className='bg-black opacity-75 text-white text-2xl text-center pt-10'>{team}</h1>
        <div className='bg-black opacity-75 flex justify-center pb-10'>
            <table className="table-auto text-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Player</th>
                        <th className="px-4 py-2">Age</th>
                        <th className="px-4 py-2">Position</th>
                        <th className="px-4 py-2">Matches</th>
                        <th className="px-4 py-2">Starts</th>
                        <th className="px-4 py-2">Minutes</th>
                        <th className="px-4 py-2">Goals</th>
                        <th className="px-4 py-2">Assists</th>
                        <th className="px-4 py-2">Yellow Cards</th>
                    </tr>
                </thead>
                <tbody>
                {teamPlayers.map((player) => (
                    <tr key={player.Player} className='hover:bg-green-700'>
                        <td className="border px-4 py-2 text-left" onClick={() => handlePlayerClick(player.Player)}>{player.Player}</td>
                        <td className="border px-4 py-2 text-center">{player.Age.split('-')[0]}</td>
                        <td className="border px-4 py-2 text-center">{player.Pos}</td>
                        <td className="border px-4 py-2 text-center">{player.MP}</td>
                        <td className="border px-4 py-2 text-center">{player.Starts}</td>
                        <td className="border px-4 py-2 text-center">{player.Min}</td>
                        <td className="border px-4 py-2 text-center">{player.Gls}</td>
                        <td className="border px-4 py-2 text-center">{player.Ast}</td>
                        <td className="border px-4 py-2 text-center">{player.CrdY}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default TeamRoster