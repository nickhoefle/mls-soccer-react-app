import React, { useState } from 'react';
import standardStats from '../data/leaguePlayersStandardStatsRawData.json';

const TeamRoster = ({ team }) => {
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('');

    const handleColumnSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const teamPlayers = standardStats
        .filter((player) => player.Squad === team)
        .sort((b, a) => {
            const valueB = b[sortColumn];
            const valueA = a[sortColumn];            
            if (sortColumn === 'Player' || sortColumn === 'Pos') {
                return sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
            } 
            const numericValueA = parseInt(valueA);
            const numericValueB = parseInt(valueB);
            return (sortDirection === 'asc' ? numericValueA - numericValueB : numericValueB - numericValueA)
        });

    return (
        <div className="overflow-x-auto">
        <div className="bg-black md:opacity-75">
            <div className="md:flex justify-center pb-10 items-center">
            <table className="table-auto text-white text-sm md:text-base">
                <thead>
                    <tr>
                        <th 
                            className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            onClick={() => handleColumnSort('Player')}
                        >
                            Player
                        </th>
                        <th
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => handleColumnSort('Age')}
                        >
                            Age
                        </th>
                        <th
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => handleColumnSort('Pos')}
                        >
                            Position
                        </th>
                        <th
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => handleColumnSort('MP')}
                        >
                            Matches
                        </th>
                        <th
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => handleColumnSort('Starts')}
                        >
                            Starts
                        </th>
                        <th
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => handleColumnSort('Min')}
                        >
                            Minutes
                        </th>
                        <th
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => handleColumnSort('Gls')}
                        >
                            Goals
                        </th>
                        <th
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => handleColumnSort('Ast')}
                        >
                            Assists
                        </th>
                        <th
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => handleColumnSort('CrdY')}
                        >
                            Yellow Cards
                        </th>
                    </tr>
                </thead>
                <tbody>
                {teamPlayers.map((player) => (
                    <tr key={player.Player} className="md:hover:bg-green-700">
                        <td className="border-t border-b px-4 py-2 sticky left-0 whitespace-nowrap bg-black md:bg-transparent cursor-pointer">{player.Player}</td>
                        <td className="border-t border-b px-4 py-2 text-center">{player.Age.split('-')[0]}</td>
                        <td className="border-t border-b px-4 py-2 text-center">{player.Pos}</td>
                        <td className="border-t border-b px-4 py-2 text-center">{player.MP}</td>
                        <td className="border-t border-b px-4 py-2 text-center">{player.Starts}</td>
                        <td className="border-t border-b px-4 py-2 text-center">{player.Min}</td>
                        <td className="border-t border-b px-4 py-2 text-center">{player.Gls}</td>
                        <td className="border-t border-b px-4 py-2 text-center">{player.Ast}</td>
                        <td className="border-t border-b px-4 py-2 text-center">{player.CrdY}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
};

export default TeamRoster;
