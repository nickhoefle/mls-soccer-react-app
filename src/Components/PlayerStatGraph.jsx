import React, { useState } from 'react';
import '../styles.css';
import data from '../data/player-standard-stats.json';
import shootingStats from '../data/shooting-stats.json';
import defStats from '../data/def-90.json';
import diacriticless from 'diacriticless';
import matchingPositions from '../data/matchingPositions';


const PlayerStatGraph = ({ playerName }) => {
    
    const [activeStat, setActiveStat] = useState('xgPer90');

    const handleStatClick = (stat) => {
        setActiveStat(stat);
    };

    const searchedPlayerName = diacriticless(playerName.toLowerCase());
    const matchingPlayer = data.find((player) => {
        const cleanedPlayerName = diacriticless(player.Player.toLowerCase());
        return cleanedPlayerName.includes(searchedPlayerName);
    });

    function findLeagueAverage(jsonFile, stat, matchingPlayer) {
        let sum = 0;
        let count = 0;
        const positionsToInclude = matchingPositions[matchingPlayer.Pos.replace(',', '').toLowerCase()];        
        
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
        diacriticless(p.Player.toLowerCase()).includes(searchedPlayerName)
    );

    const matchingPlayerDefense = defStats.find((p) =>
        diacriticless(p.Player.toLowerCase()).includes(searchedPlayerName)
    );

    const xgPer90Avg = findLeagueAverage(data, 'xG__1', matchingPlayer);
    const goalsPer90Avg = findLeagueAverage(data, 'Gls__1', matchingPlayer);
    const xaPer90Avg = findLeagueAverage(data, 'xAG__1', matchingPlayer);
    const assistsPer90Avg = findLeagueAverage(data, 'Ast__1', matchingPlayer);
    const yellowCardsAvg = findLeagueAverage(data, 'CrdY', matchingPlayer);
    const shotsPer90Avg = findLeagueAverage(shootingStats, 'Sh/90', matchingPlayerShooting);
    const tacklesPer90Avg = findLeagueAverage(defStats, 'Tkl', matchingPlayerDefense);
    const tacklePercent = findLeagueAverage(defStats, 'Tkl%', matchingPlayerDefense);
    const clearsPer90Avg = findLeagueAverage(defStats, 'Clr', matchingPlayerDefense);
    

    return (
        <>
            <h1 className='text-white text-2xl lg:opacity-75'>
                {matchingPlayer ? matchingPlayer.Player : playerName} Stat Graphs
            </h1>
            <i className='text-white text-md lg:opacity-75'>vs. League Average for Position</i>
            <div className='flex md:pl-0 md:justify-center text-white lg:opacity-75'>
                {matchingPlayer ? (
                <div className='w-1/1 md:w-1/4'>
                    <div className='flex justify-center stat-links'>
                        <p className='p-4 cursor-pointer' onClick={() => handleStatClick('xgPer90')}>
                            <span className={activeStat === 'xgPer90' ? 'underline' : ''}>xGoals per 90</span>
                        </p>                    
                        <p className='p-4 cursor-pointer' onClick={() => handleStatClick('xaPer90')}>
                            <span className={activeStat === 'xaPer90' ? 'underline' : ''}>xAssists per 90</span>
                        </p>
                        <p className='p-4 cursor-pointer' onClick={() => handleStatClick('yellowCards')}>
                            <span className={activeStat === 'yellowCards' ? 'underline' : ''}>Yellow Cards</span>
                        </p>
                    </div>
                    <div className='flex justify-center stat-links pb-4'>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('goalsPer90')}>
                            <span className={activeStat === 'goalsPer90' ? 'underline' : ''}>Goals per 90</span>
                        </p>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('assistsPer90')}>
                            <span className={activeStat === 'assistsPer90' ? 'underline' : ''}>Assists per 90</span>
                        </p>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('shotsPer90')}>
                            <span className={activeStat === 'shotsPer90' ? 'underline' : ''}>Shots per 90</span>
                        </p>
                    </div>
                    <div className='flex justify-center stat-links pb-4'>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('tacklesPer90')}>
                            <span className={activeStat === 'tacklesPer90' ? 'underline' : ''}>Tackles per 90</span>
                        </p>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('tacklePercent')}>
                            <span className={activeStat === 'tacklePercent' ? 'underline' : ''}>Tackle Percent</span>
                        </p>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('clearsPer90')}>
                            <span className={activeStat === 'clearsPer90' ? 'underline' : ''}>Clears per 90</span>
                        </p>
                    </div>
                    
                    {/* Expected Goals per 90 */}
                    {activeStat === 'xgPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayer.xG__1 * 250}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayer.xG__1.toFixed(2)}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${xgPer90Avg * 250}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{xgPer90Avg}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}
                    {/* Goals per 90 */}
                    {activeStat === 'goalsPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayer.Gls__1 * 250}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Gls__1}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${goalsPer90Avg * 250}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{goalsPer90Avg}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}
                    {/* Expected Assists per 90 */}
                    {activeStat === 'xaPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayer.xAG__1 * 600}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayer.xAG__1.toFixed(2)}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${xaPer90Avg * 500}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{xaPer90Avg}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}
                    {/* Assists per 90 */}
                    {activeStat === 'assistsPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayer.Ast__1 * 500}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Ast__1.toFixed(2)}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${assistsPer90Avg * 500}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{assistsPer90Avg}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}
                    {/* Yellow Cards */}
                    {activeStat === 'yellowCards' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayer.CrdY * 35}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayer.CrdY}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${yellowCardsAvg * 35}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{yellowCardsAvg}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}
                    {/* Shots per 90 */}
                    {activeStat === 'shotsPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerShooting['Sh/90'] * 50}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerShooting['Sh/90'].toFixed(2)}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${shotsPer90Avg * 50}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{shotsPer90Avg}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}
                    {/* Tackles per 90 */}
                    {activeStat === 'tacklesPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerDefense.Tkl * 50}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefense.Tkl.toFixed(2)}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${tacklesPer90Avg * 50}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{tacklesPer90Avg}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}
                    {/* Tackle Percent */}
                    {activeStat === 'tacklePercent' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerDefense['Tkl%'] * 3}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefense['Tkl%'].toFixed(2)} %</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${tacklePercent * 3}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{tacklePercent} %</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}
                    {/* Clears Per 90 */}
                    {activeStat === 'clearsPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerDefense.Clr * 40}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefense.Clr.toFixed(2)}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${clearsPer90Avg * 40}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{clearsPer90Avg}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}                           
                </div>
                ) : (
                <p>No matching player found.</p>
                )}
            </div>
        </>
    );
};

export default PlayerStatGraph;
