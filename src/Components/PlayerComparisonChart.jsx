import React from 'react'

import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../dataCleaner'; 

import leaguePlayersShootingStatsRawData from '../data/leaguePlayersShootingStatsRawData.json';
import { cleanShootingStats } from '../dataCleaner'; 

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);
const leaguePlayersShootingStats = cleanShootingStats(leaguePlayersShootingStatsRawData);

const PlayerComparisonChart = ({ playerToCompare1, playerToCompare2 }) => {
    
    const player1 = leaguePlayersStandardStats.find((player) => player.Name === playerToCompare1);
    const player2 = leaguePlayersStandardStats.find((player) => player.Name === playerToCompare2);

    const player1Shooting = leaguePlayersShootingStats.find((player) => player.Name === playerToCompare1);
    const player2Shooting = leaguePlayersShootingStats.find((player) => player.Name === playerToCompare2);

    //Standard Stat Calcs
    const isPlayer1Higher = (stat) => player1[stat] > player2[stat];
    const isPlayer2Higher = (stat) => player1[stat] < player2[stat];

    //Shooting Stat Calcs
    const isPlayer1HigherShooting = (stat) => player1Shooting[stat] > player2Shooting[stat];
    const isPlayer2HigherShooting = (stat) => player1Shooting[stat] < player2Shooting[stat];

    return (
        <div className='flex justify-center pt-10'>
            <table className="table-auto text-white">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Stat</th>
                        <th className="border px-4 py-2">{playerToCompare1}</th>
                        <th className="border px-4 py-2">{playerToCompare2}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border px-4 py-2'>Matches Played</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('MP') ? 'underline' : ''}`}>{player1.MatchesPlayed}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('MP') ? 'underline' : ''}`}>{player2.MatchesPlayed}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Matches Started</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Starts') ? 'underline' : ''}`}>{player1.Starts}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Starts') ? 'underline' : ''}`}>{player2.Starts}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('Sh') ? 'underline' : ''}`}>{player1Shooting.Shots}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('Sh') ? 'underline' : ''}`}>{player2Shooting.Shots}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('Sh/90') ? 'underline' : ''}`}>{player1Shooting.ShotsPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('Sh/90') ? 'underline' : ''}`}>{player2Shooting.ShotsPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots on Target</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('SoT') ? 'underline' : ''}`}>{player1Shooting.ShotsOnTarget}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('SoT') ? 'underline' : ''}`}>{player2Shooting.ShotsOnTarget}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots on Target per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('SoT/90') ? 'underline' : ''}`}>{player1Shooting.ShotsOnTargetPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('SoT/90') ? 'underline' : ''}`}>{player2Shooting.ShotsOnTargetPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Goals</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Gls') ? 'underline' : ''}`}>{player1.Goals}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Gls') ? 'underline' : ''}`}>{player2.Goals}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Goals per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Gls__1') ? 'underline' : ''}`}>{player1.GoalsPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Gls__1') ? 'underline' : ''}`}>{player2.GoalsPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Goals</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('xG') ? 'underline' : ''}`}>{player1.ExpectedGoals}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('xG') ? 'underline' : ''}`}>{player2.ExpectedGoals}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Goals per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('xG__1') ? 'underline' : ''}`}>{player1.ExpectedGoalsPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('xG__1') ? 'underline' : ''}`}>{player2.ExpectedGoalsPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Assists</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Ast') ? 'underline' : ''}`}>{player1.Assists}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Ast') ? 'underline' : ''}`}>{player2.Assists}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Assists</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('xAG') ? 'underline' : ''}`}>{player1.ExpectedAssists}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('xAG') ? 'underline' : ''}`}>{player2.ExpectedAssists}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Assists per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('xAG__1') ? 'underline' : ''}`}>{player1.ExpectedAssistsPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('xAG__1') ? 'underline' : ''}`}>{player2.ExpectedAssistsPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Yellow Cards</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('CrdY') ? 'underline' : ''}`}>{player1.YellowCards}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('CrdY') ? 'underline' : ''}`}>{player2.YellowCards}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>PK Attempts</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('PKatt') ? 'underline' : ''}`}>{player1.PenaltyKickAttempts}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('PKatt') ? 'underline' : ''}`}>{player2.PenaltyKickAttempts}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>PK Made</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('PK') ? 'underline' : ''}`}>{player1.PenaltyKickGoals}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('PK') ? 'underline' : ''}`}>{player2.PenaltyKickGoals}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PlayerComparisonChart