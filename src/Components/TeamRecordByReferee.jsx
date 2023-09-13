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
        } else if (isHomeTeam && homeScore > awayScore) {
            refereeStatistics[referee].wins++;
        } else if (isAwayTeam && awayScore > homeScore) {
            refereeStatistics[referee].wins++;
        } else if (homeScore === awayScore) {
            refereeStatistics[referee].ties++;
        } else {
            refereeStatistics[referee].losses++;
        }
    });

    console.log(refereeStatistics);
    
    return (
            <div>
                <p>WORKING</p>
            </div>
    )
}

export default TeamRecordByReferee