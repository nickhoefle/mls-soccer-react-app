import matchingPositions from './data/matchingPositions';

export function findLeagueAverage(jsonFile, stat, matchingPlayer) {
    let sum = 0;
    let count = 0;
    
    const positionsToInclude = matchingPositions[matchingPlayer.Position.replace(',', '').toLowerCase()];        
    
    jsonFile.forEach((leaguePlayer) => {
        if (positionsToInclude.includes(leaguePlayer.Position.toLowerCase()) && leaguePlayer[stat] !== '') {
            sum += Number(leaguePlayer[stat]);
            count++;
        }
    });
    const leagueAverage = count > 0 ? sum / count : 0;
    return leagueAverage.toFixed(2);
}