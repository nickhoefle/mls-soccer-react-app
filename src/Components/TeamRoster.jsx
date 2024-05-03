import React, { useState } from 'react';
import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../js-files/dataCleaner'; 

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);

const TeamRoster = ({ team }) => {
    const [statColumn, setStatColumn] = useState('Goals');
    const [sortDirection, setSortDirection] = useState('desc');

    const handleColumnSort = (column) => {
        if (statColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setStatColumn(column);
            setSortDirection('desc');
        }
    };

    // Recalculates when component state changes
    const teamPlayers = leaguePlayersStandardStats
        .filter((leaguePlayer) => leaguePlayer.Team === team)
        .sort((a, b) => {
            const StringA = String(a[statColumn]);
            const StringB = String(b[statColumn]);

            if (statColumn === 'Name' || statColumn === 'Position') {
                return sortDirection === 'asc' ? StringA.localeCompare(StringB) : StringB.localeCompare(StringA);
            }

            const numberA = parseInt(StringA.replace(',', ''));
            const numberB = parseInt(StringB.replace(',', ''));

            return sortDirection === 'asc' ? numberA - numberB : numberB - numberA;
        });


    return (
        <div className="overflow-x-auto">
            <div>
                <div className="md:flex justify-center pb-10 items-center">
                    <table className="table-auto text-white text-sm md:text-base">
                        <thead>
                            <tr>
                                <th 
                                    class="px-4 py-2 sticky text-left left-0 cursor-pointer bg-black sm:bg-transparent"
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
