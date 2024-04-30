import allLeagueMatchesRawData from '../data/allLeagueMatchesRawData.json';
import { cleanAllLeagueMatchesRawData } from './dataCleaner'; 

const allLeagueMatches = cleanAllLeagueMatchesRawData(allLeagueMatchesRawData);

export function teamRecord(team) {
    
    const teamMatchObjsArray = allLeagueMatches.filter((match) => (match.HomeTeam === team || match.AwayTeam === team) && match.Score !== "")

    let wins = 0;
    let losses = 0;
    let ties = 0;

    teamMatchObjsArray.forEach((match) => {
        const isHomeTeam = match.HomeTeam === team;
        const isAwayTeam = match.AwayTeam === team;
        const scoreParts = match.Score.split('–');
        const homeScore = parseInt(scoreParts[0]);
        const awayScore = parseInt(scoreParts[1]);

        if (isHomeTeam && homeScore > awayScore) {
            wins++;
        } else if (isAwayTeam && awayScore > homeScore) {
            wins++;
        } else if (homeScore === awayScore) {
            ties++;
        } else { 
            losses++; }
    });

    return `${wins} - ${losses} - ${ties}`;

}