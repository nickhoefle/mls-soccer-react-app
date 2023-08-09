import React, { useState } from 'react';
import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../dataCleaner'; 

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);

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

    const teamPlayers = leaguePlayersStandardStats
        .filter((player) => player.Team === team)
        .sort((b, a) => {
            const valueB = b[sortColumn];
            const valueA = a[sortColumn];            
            if (sortColumn === 'Name' || sortColumn === 'Position') {
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
                                    onClick={() => handleColumnSort('Name')}
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
                                    onClick={() => handleColumnSort('Position')}
                                >
                                    Position
                                </th>
                                <th
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => handleColumnSort('MatchesPlayed')}
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
                                    onClick={() => handleColumnSort('MinutesPlayed')}
                                >
                                    Minutes
                                </th>
                                <th
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => handleColumnSort('Goals')}
                                >
                                    Goals
                                </th>
                                <th
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => handleColumnSort('Assists')}
                                >
                                    Assists
                                </th>
                                <th
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => handleColumnSort('YellowCards')}
                                >
                                    Yellow Cards
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {teamPlayers.map((player) => (
                            <tr key={player.Name} className="md:hover:bg-green-700">
                                <td className="border-t border-b px-4 py-2 sticky left-0 whitespace-nowrap bg-black md:bg-transparent cursor-pointer">{player.Name}</td>
                                <td className="border-t border-b px-4 py-2 text-center">{player.Age.split('-')[0]}</td>
                                <td className="border-t border-b px-4 py-2 text-center">{player.Position}</td>
                                <td className="border-t border-b px-4 py-2 text-center">{player.MatchesPlayed}</td>
                                <td className="border-t border-b px-4 py-2 text-center">{player.Starts}</td>
                                <td className="border-t border-b px-4 py-2 text-center">{player.MinutesPlayed}</td>
                                <td className="border-t border-b px-4 py-2 text-center">{player.Goals}</td>
                                <td className="border-t border-b px-4 py-2 text-center">{player.Assists}</td>
                                <td className="border-t border-b px-4 py-2 text-center">{player.YellowCards}</td>
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
