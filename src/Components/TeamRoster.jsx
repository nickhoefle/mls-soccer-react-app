import React from 'react';
import data from '../data/player-standard-stats.json';

const TeamRoster = ({ team, setPlayer }) => {
    const teamPlayers = data.filter((player) => player.Squad === team);

    const handlePlayerClick = (playerName) => {
        setPlayer(playerName);
    };

    return (
        <div className="overflow-x-auto">
            <div className="bg-black bg-opacity-75 pb-10">
                <div className="md:flex md:justify-center md:items-center">
                <table className="table-auto text-white text-sm md:text-base">
                    <thead>
                    <tr className='md:opacity-75'>
                        <th className="px-4 py-2 sticky left-0 bg-black">Player</th>
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
                        <tr key={player.Player} className="md:hover:bg-green-700 bg-black md:opacity-75">
                        <td
                            className="border px-4 py-2 sticky left-0 whitespace-nowrap bg-black md:bg-transparent cursor-pointer"
                            onClick={() => handlePlayerClick(player.Player)}
                        >
                            {player.Player}
                        </td>
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
            </div>
        </div>
    );
}

export default TeamRoster;
