import React from 'react';
import data from '../csvjson.json';
import shootingStats from '../shooting-stats.json';
import diacriticless from 'diacriticless';

const PlayerStatGraph = ({ playerName }) => {
    const cleanedSearchedPlayerName = diacriticless(playerName.toLowerCase());
    const matchingPlayer = data.find((player) => {
        const cleanedPlayerName = diacriticless(player.Player.toLowerCase());
        return cleanedPlayerName.includes(cleanedSearchedPlayerName);
    });

    function sumStat(jsonFile, stat, matchingPlayer) {
        const matchingPositions = {
            df: ['df', 'mfdf', 'dfmf', 'fwdf', 'dffw'],
            mf: ['mf', 'dfmf', 'mfdf', 'fwdf', 'dffw'],
            fw: ['fw', 'fwmf', 'mffw', 'fwdf', 'dffw'],
            fwmf: ['fwmf', 'mffw', 'fw', 'mf', 'mfdf', 'dfmf'],
            mffw: ['fwmf', 'mffw', 'fw', 'mf', 'mfdf', 'dfmf'],
            mfdf: ['mf', 'df', 'mfdf', 'dfmf', 'mffw', 'fwmf', 'dffw', 'fwdf'],
            dfmf: ['mf', 'df', 'mfdf', 'dfmf', 'mffw', 'fwmf', 'dffw', 'fwdf'],
            fwdf: ['fwdf', 'dffw', 'df', 'fw', 'mfdf', 'dfmf', 'fwmf', 'mffw'],
            dffw: ['fwdf', 'dffw', 'df', 'fw', 'mfdf', 'dfmf', 'fwmf', 'mffw'],
        };
        
        const positionsToInclude = matchingPositions[matchingPlayer.Pos.toLowerCase()];
        let sum = 0;
        let count = 0;
        
        jsonFile.forEach((player) => {
            if (positionsToInclude.includes(player.Pos.toLowerCase()) && player[stat] !== '') {
                sum += Number(player[stat]);
                count++;
            }
        });
        const leagueAverage = count > 0 ? sum / count : 0;
        return leagueAverage.toFixed(2);
    }

    const matchingPlayerShooting = shootingStats.find((p) =>
        diacriticless(p.Player.toLowerCase()).includes(cleanedSearchedPlayerName)
    );

    const xgPer90 = sumStat(data, 'xG__1', matchingPlayer);
    const xaPer90 = sumStat(data, 'xAG__1', matchingPlayer);
    const yellowCards = sumStat(data, 'CrdY', matchingPlayer);
    const shotsPer90 = sumStat(shootingStats, 'Sh90', matchingPlayerShooting);
    const shotsOnTargetPer90 = sumStat(shootingStats, 'SoT90', matchingPlayerShooting);

    return (
        <div>
            <h1 className='text-white text-xl'>
                Stat Graphs for {matchingPlayer ? matchingPlayer.Player : playerName}
            </h1>

            {matchingPlayer ? (
                <div>           
                    <p> Expected Goals per 90: {matchingPlayer.xG__1} - League Average: {xgPer90} </p>
                    <p> Expected Assists per 90: {matchingPlayer.xAG__1} - League Average: {xaPer90} </p>
                    <p> Yellow Cards: {matchingPlayer.CrdY} - League Average: {yellowCards} </p>
                    <p> Shots per 90: {matchingPlayerShooting.Sh90} - League Average: {shotsPer90} </p>
                    <p> Shots on Target per 90: {matchingPlayerShooting.SoT90} - League Average: {shotsOnTargetPer90} </p>
                </div>
            ) : (
                    <p>No matching player found.</p>
                )}
        </div>
    );
};

export default PlayerStatGraph;
