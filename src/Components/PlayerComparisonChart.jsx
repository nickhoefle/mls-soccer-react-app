import React from 'react'
import standardStats from '../data/player-standard-stats.json'
import shootingData from '../data/shooting-stats.json'

const PlayerComparisonChart = ({ playerToCompare, playerToCompare2 }) => {
    
    const player1 = standardStats.find((player) => player.Player === playerToCompare);
    const player2 = standardStats.find((player) => player.Player === playerToCompare2);

    const player1Shooting = shootingData.find((player) => player.Player === playerToCompare);
    const player2Shooting = shootingData.find((player) => player.Player === playerToCompare2);

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
                        <th className="border px-4 py-2">{playerToCompare}</th>
                        <th className="border px-4 py-2">{playerToCompare2}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border px-4 py-2'>Matches Played</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('MP') ? 'underline' : ''}`}>{player1.MP}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('MP') ? 'underline' : ''}`}>{player2.MP}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Matches Started</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Starts') ? 'underline' : ''}`}>{player1.Starts}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Starts') ? 'underline' : ''}`}>{player2.Starts}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('Sh') ? 'underline' : ''}`}>{player1Shooting.Sh}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('Sh') ? 'underline' : ''}`}>{player2Shooting.Sh}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('Sh/90') ? 'underline' : ''}`}>{player1Shooting['Sh/90']}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('Sh/90') ? 'underline' : ''}`}>{player2Shooting['Sh/90']}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots on Target</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('SoT') ? 'underline' : ''}`}>{player1Shooting.SoT}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('SoT') ? 'underline' : ''}`}>{player2Shooting.SoT}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Shots on Target per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1HigherShooting('SoT/90') ? 'underline' : ''}`}>{player1Shooting['SoT/90']}</td>
                        <td className={`border px-4 py-2 ${isPlayer2HigherShooting('SoT/90') ? 'underline' : ''}`}>{player2Shooting['SoT/90']}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Goals</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Gls') ? 'underline' : ''}`}>{player1.Gls}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Gls') ? 'underline' : ''}`}>{player2.Gls}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Goals per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Gls__1') ? 'underline' : ''}`}>{player1['Gls__1']}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Gls__1') ? 'underline' : ''}`}>{player2['Gls__1']}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Goals</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('xG') ? 'underline' : ''}`}>{player1.xG}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('xG') ? 'underline' : ''}`}>{player2.xG}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Goals per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('xG__1') ? 'underline' : ''}`}>{player1['xG__1']}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('xG__1') ? 'underline' : ''}`}>{player2['xG__1']}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Assists</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('Ast') ? 'underline' : ''}`}>{player1.Ast}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('Ast') ? 'underline' : ''}`}>{player2.Ast}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Assists</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('xAG') ? 'underline' : ''}`}>{player1.xAG}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('xAG') ? 'underline' : ''}`}>{player2.xAG}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Expected Assists per 90</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('xAG__1') ? 'underline' : ''}`}>{player1['xAG__1']}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('xAG__1') ? 'underline' : ''}`}>{player2['xAG__1']}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>Yellow Cards</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('CrdY') ? 'underline' : ''}`}>{player1.CrdY}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('CrdY') ? 'underline' : ''}`}>{player2.CrdY}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>PK Attempts</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('PKatt') ? 'underline' : ''}`}>{player1.PKatt}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('PKatt') ? 'underline' : ''}`}>{player2.PKatt}</td>
                    </tr>
                    <tr>
                        <td className='border px-4 py-2'>PK Made</td>
                        <td className={`border px-4 py-2 ${isPlayer1Higher('PK') ? 'underline' : ''}`}>{player1.PK}</td>
                        <td className={`border px-4 py-2 ${isPlayer2Higher('PK') ? 'underline' : ''}`}>{player2.PK}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PlayerComparisonChart