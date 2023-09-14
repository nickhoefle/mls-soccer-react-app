import React from 'react'
import allLeagueMatchesRawData from '../data/allLeagueMatchesRawData.json';
import { cleanAllLeagueMatchesRawData } from '../dataCleaner'; 

const allLeagueMatches = cleanAllLeagueMatchesRawData(allLeagueMatchesRawData);

const TeamRecordByReferee = ({ team }) => {
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
            refereeStatistics[referee] = { wins: 0, losses: 0, ties: 0 };
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


    console.log(refereeStatistics);
    
    const rows = Object.keys(refereeStatistics).map((referee) => {
        const { wins, losses, ties } = refereeStatistics[referee];
        return (
            <tr key={referee}>
                <td className="border-t border-b px-4 py-2 text-center">{referee}</td>
                <td className="border-t border-b px-4 py-2 text-center">{wins}</td>
                <td className="border-t border-b px-4 py-2 text-center">{losses}</td>
                <td className="border-t border-b px-4 py-2 text-center">{ties}</td>
            </tr>
        );
    });
    
    return (
        <div className="bg-black md:opacity-75">
            <div className="md:flex justify-center pb-10 items-center">
                <table className="table-auto text-white text-sm md:text-base">
                    <thead>
                        <tr>
                            <th
                                className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            >
                                Referee
                            </th>
                            <th
                                className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            >
                                Wins
                            </th>
                            <th
                                className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            >
                                Losses
                            </th>
                            <th
                                className="px-4 py-2 sticky left-0 bg-black cursor-pointer"
                            >
                                Ties
                            </th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        </div>
    );
};
    
    
    
    
    
    
    

export default TeamRecordByReferee