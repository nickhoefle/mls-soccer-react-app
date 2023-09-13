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
                <td>{referee}</td>
                <td>{wins}</td>
                <td>{losses}</td>
                <td>{ties}</td>
            </tr>
        );
    });
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Referee</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Ties</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};
    
    
    
    
    
    
    

export default TeamRecordByReferee