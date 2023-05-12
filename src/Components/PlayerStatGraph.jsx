import React from 'react';
import data from '../csvjson.json';
import shootingStats from '../shooting-stats.json'


const PlayerStatGraph = ({ player }) => {
    const matchingPlayer = data.find(p => p.Player === player.strPlayer);
    const matchingPlayerShooting = shootingStats.find(p => p.Player === player.strPlayer);
    // console.log(data)
    // console.log(matchingPlayer.Pos);
    
    function sumStat(jsonFile, stat, matchingPlayer) {
        let n = 0;
        const sum = jsonFile.reduce((accumulator, currentValue) => {        
            if (currentValue.Pos.includes(matchingPlayer.Pos) && (currentValue[stat] !== '')) {
                n+= 1;
                console.log(n);
                return accumulator + Number(currentValue[stat]);
            } else {
                return accumulator;
            }
        }, 0);
        const leagueAverage = sum / n;
        return { leagueAverage };
    }

    const xgPer90 = sumStat(data, "xG__1", matchingPlayer);
    const xaPer90 = sumStat(data, 'xAG__1', matchingPlayer);
    const yellowCards = sumStat(data, "CrdY", matchingPlayer);
    const shotsPer90 = sumStat(shootingStats, "Sh90", matchingPlayer);
    const shotsOnTargetPer90 = sumStat(shootingStats, "Sh90", matchingPlayer);

    return (
        <div>
            <h1 className='text-white text-xl'>Stat Graphs</h1>

            <div className='text-left py-4'>
                <u className='text-white'>Expected Goals per 90</u>
                <div className="flex items-center">
                    <hr style={{ width: `${matchingPlayer.xG__1 * 400}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{matchingPlayer.xG__1} - {player.strPlayer}</p>
                </div>
                <div className="flex items-center">
                    <hr style={{ width: `${xgPer90.leagueAverage * 400}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{xgPer90.leagueAverage.toFixed(2)} - League Avg - Position: {matchingPlayer.Pos}</p>
                </div>
                <br></br>
                <u className='text-white'>Expected Assists per 90</u>
                <div className="flex items-center">
                    <hr style={{ width: `${matchingPlayer.xAG__1 * 400 +1}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{matchingPlayer.xAG__1} - {player.strPlayer}</p>
                </div>
                <div className="flex items-center">
                    <hr style={{ width: `${xaPer90.leagueAverage * 400}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{xaPer90.leagueAverage.toFixed(2)} - League Avg - Position: {matchingPlayer.Pos}</p>
                </div>
                <br></br>
                <u className='text-white'>Shots Per 90</u>
                <div className="flex items-center">
                    <hr style={{ width: `${matchingPlayerShooting.Sh90 * 75}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{matchingPlayerShooting.Sh90} - {player.strPlayer}</p>
                </div>
                <div className="flex items-center">
                    <hr style={{ width: `${shotsPer90.leagueAverage * 75}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{shotsPer90.leagueAverage.toFixed(2)} - League Avg - Position: {matchingPlayer.Pos}</p>
                </div>
                <br></br>
                <u className='text-white'>Shots on Target Per 90</u>
                <div className="flex items-center">
                    <hr style={{ width: `${matchingPlayerShooting.SoT90 * 75}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{matchingPlayerShooting.SoT90} - {player.strPlayer}</p>
                </div>
                <div className="flex items-center">
                    <hr style={{ width: `${shotsOnTargetPer90.leagueAverage * 75}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{shotsOnTargetPer90.leagueAverage.toFixed(2)} - League Avg - Position: {matchingPlayer.Pos}</p>
                </div>
                <br></br>
                <u className='text-white'>Yellow Cards</u>
                <div className="flex items-center">
                    <hr style={{ width: `${matchingPlayer.CrdY * 75 + 1}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{matchingPlayer.CrdY} - {player.strPlayer}</p>
                </div>
                <div className="flex items-center">
                    <hr style={{ width: `${yellowCards.leagueAverage * 75}px`, height: '5px', backgroundColor: 'white' }}></hr>
                    <p style={{marginLeft: "10px"}}>{yellowCards.leagueAverage.toFixed(2)} - League Avg - Position: {matchingPlayer.Pos}</p>
                </div>
            </div>
            
        
        
        </div>
    );
};

export default PlayerStatGraph;