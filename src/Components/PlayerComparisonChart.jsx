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
                        <td className={`border px-4 py-2 ${isPlayer1Higher('MatchesPlayed') ? 'underline' : ''}`}>{player1.MatchesPlayed}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('MatchesPlayed') ? 'underline' : ''}`}>{player2.MatchesPlayed}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Matches Started</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Starts') ? 'underline' : ''}`}>{player1.Starts}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Starts') ? 'underline' : ''}`}>{player2.Starts}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('Shots') ? 'underline' : ''}`}>{player1Shooting.Shots}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('Shots') ? 'underline' : ''}`}>{player2Shooting.Shots}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('ShotsPer90') ? 'underline' : ''}`}>{player1Shooting.ShotsPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('ShotsPer90') ? 'underline' : ''}`}>{player2Shooting.ShotsPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots on Target</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('ShotsOnTarget') ? 'underline' : ''}`}>{player1Shooting.ShotsOnTarget}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('ShotsOnTarget') ? 'underline' : ''}`}>{player2Shooting.ShotsOnTarget}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots on Target per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('ShotsOnTargetPer90') ? 'underline' : ''}`}>{player1Shooting.ShotsOnTargetPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('ShotsOnTargetPer90') ? 'underline' : ''}`}>{player2Shooting.ShotsOnTargetPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Goals</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Goals') ? 'underline' : ''}`}>{player1.Goals}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Goals') ? 'underline' : ''}`}>{player2.Goals}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Goals per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('GoalsPer90') ? 'underline' : ''}`}>{player1.GoalsPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('GoalsPer90') ? 'underline' : ''}`}>{player2.GoalsPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Goals</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('ExpectedGoals') ? 'underline' : ''}`}>{player1.ExpectedGoals}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('ExpectedGoals') ? 'underline' : ''}`}>{player2.ExpectedGoals}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Goals per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('ExpectedGoalsPer90') ? 'underline' : ''}`}>{player1.ExpectedGoalsPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('ExpectedGoalsPer90') ? 'underline' : ''}`}>{player2.ExpectedGoalsPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Assists</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Assists') ? 'underline' : ''}`}>{player1.Assists}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Assists') ? 'underline' : ''}`}>{player2.Assists}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Assists</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('ExpectedAssists') ? 'underline' : ''}`}>{player1.ExpectedAssists}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('ExpectedAssists') ? 'underline' : ''}`}>{player2.ExpectedAssists}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Assists per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('ExpectedAssistsPer90') ? 'underline' : ''}`}>{player1.ExpectedAssistsPer90}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('ExpectedAssistsPer90') ? 'underline' : ''}`}>{player2.ExpectedAssistsPer90}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Yellow Cards</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('YellowCards') ? 'underline' : ''}`}>{player1.YellowCards}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('YellowCards') ? 'underline' : ''}`}>{player2.YellowCards}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>PK Attempts</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('PenaltyKickAttempts') ? 'underline' : ''}`}>{player1.PenaltyKickAttempts}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('PenaltyKickAttempts') ? 'underline' : ''}`}>{player2.PenaltyKickAttempts}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>PK Made</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('PenaltyKickGoals') ? 'underline' : ''}`}>{player1.PenaltyKickGoals}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('PenaltyKickGoals') ? 'underline' : ''}`}>{player2.PenaltyKickGoals}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PlayerComparisonChart