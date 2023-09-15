import React, { useState } from 'react';
import allLeagueMatchesRawData from '../data/allLeagueMatchesRawData.json';
import { cleanAllLeagueMatchesRawData } from '../dataCleaner'; 

const allLeagueMatches = cleanAllLeagueMatchesRawData(allLeagueMatchesRawData);

const TeamRecordByReferee = ({ team }) => {
    const [sortColumn, setSortColumn] = useState('referee');
    const [sortDirection, setSortDirection] = useState('asc');

    const handleColumnSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('desc');
        }
    };

    const teamMatchesArray = allLeagueMatches.filter((match) => (match.HomeTeam === team || match.AwayTeam === team) && match.Score !== "");
    const refereeStatistics = {};

    teamMatchesArray.forEach((match) => {
        const referee = match.Referee;
        const isHomeTeam = match.HomeTeam === team;
        const isAwayTeam = match.AwayTeam === team;
        const scoreParts = match.Score.split('–');
        const homeScore = parseInt(scoreParts[0]);
        const awayScore = parseInt(scoreParts[1]);

        if (!refereeStatistics[referee]) {
            refereeStatistics[referee] = { name: referee, wins: 0, losses: 0, ties: 0 };
        }
        if (isHomeTeam && homeScore > awayScore) {
            refereeStatistics[referee].wins++;
        }  
        if (isAwayTeam && awayScore > homeScore) {
            refereeStatistics[referee].wins++;
        } 
        if (homeScore === awayScore) {
            refereeStatistics[referee].ties++;
        } 
        refereeStatistics[referee].losses++;
    });

    const sortedReferees = Object.values(refereeStatistics).sort((a, b) => {
        if (sortColumn === 'referee') {
            const firstNameA = a.name.split(' ')[0];
            const firstNameB = b.name.split(' ')[0];
            return sortDirection === 'asc' ? firstNameA.localeCompare(firstNameB) : firstNameB.localeCompare(firstNameA);
        } else {
            return sortDirection === 'asc' ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
        }
    });

    const rows = sortedReferees.map((refereeData) => {
        const { name, wins, losses, ties } = refereeData;
        return (
            <tr key={name}>
                <td className="border-t border-b px-4 py-2 text-center">{name}</td>
                <td className="border-t border-b px-4 py-2 text-center">{wins}</td>
                <td className="border-t border-b px-4 py-2 text-center">{losses}</td>
                <td className="border-t border-b px-4 py-2 text-center">{ties}</td>
            </tr>
        );
    });

    return (
        <div className="bg-black md:opacity-75 flex items-center justify-center pb-10">
            <table className="table-auto text-white text-sm md:text-base">
                <thead>
                    <tr>
                        <th
                            className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            onClick={() => handleColumnSort('referee')}
                        >
                            Referee
                        </th>
                        <th
                            className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            onClick={() => handleColumnSort('wins')}
                        >
                            Wins
                        </th>
                        <th
                            className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            onClick={() => handleColumnSort('losses')}
                        >
                            Losses
                        </th>
                        <th
                            className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            onClick={() => handleColumnSort('ties')}
                        >
                            Ties
                        </th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default TeamRecordByReferee;