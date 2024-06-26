import React, { useState } from 'react';
import diacriticless from 'diacriticless';
import '../styles.css';
import thirdsDiagramImage from "../images/thirds-diagram.png";
import { findLeagueAverage } from '../js-files/findLeagueAverage'; 

import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../js-files/dataCleaner'; 

import leaguePlayersShootingStatsRawData from '../data/leaguePlayersShootingStatsRawData.json';
import { cleanShootingStats } from '../js-files/dataCleaner'; 

import leaguePlayersDefensePer90StatsRawData from '../data/leaguePlayersDefensePer90StatsRawData.json';
import { cleanDefenseStats } from '../js-files/dataCleaner';

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);
const leaguePlayersShootingStats = cleanShootingStats(leaguePlayersShootingStatsRawData);
const leaguePlayersDefensePer90Stats = cleanDefenseStats(leaguePlayersDefensePer90StatsRawData);

const PlayerStatGraph = ({ playerName }) => {
    const [activeStat, setActiveStat] = useState('ExpectedGoalsPer90');

    const handleStatClick = (stat) => {
        setActiveStat(stat);
    };

    const searchedPlayerName = diacriticless(playerName.toLowerCase());
    
    const matchingPlayerStandardStats = leaguePlayersStandardStats.find((leaguePlayer) => 
        diacriticless(leaguePlayer.Name.toLowerCase()).includes(searchedPlayerName)
    );
    
    const matchingPlayerShootingStats = leaguePlayersShootingStats.find((leaguePlayer) =>
        diacriticless(leaguePlayer.Name.toLowerCase()).includes(searchedPlayerName)
    );

    const matchingPlayerDefenseStats = leaguePlayersDefensePer90Stats.find((leaguePlayer) =>
        diacriticless(leaguePlayer.Name.toLowerCase()).includes(searchedPlayerName)
    );

    const ExpectedGoalsPer90Avg = findLeagueAverage(leaguePlayersStandardStats, 'ExpectedGoalsPer90', matchingPlayerStandardStats);
    const GoalsPer90Avg = findLeagueAverage(leaguePlayersStandardStats, 'GoalsPer90', matchingPlayerStandardStats);
    const ExpectedAssistsPer90Avg = findLeagueAverage(leaguePlayersStandardStats, 'ExpectedAssistsPer90', matchingPlayerStandardStats);
    const AssistsPer90Avg = findLeagueAverage(leaguePlayersStandardStats, 'AssistsPer90', matchingPlayerStandardStats);
    const YellowCardsAvg = findLeagueAverage(leaguePlayersStandardStats, 'YellowCards', matchingPlayerStandardStats);
    const ShotsPer90Avg = findLeagueAverage(leaguePlayersShootingStats, 'ShotsPer90', matchingPlayerShootingStats);
    const TacklesPer90Avg = findLeagueAverage(leaguePlayersDefensePer90Stats, 'TacklesPer90', matchingPlayerDefenseStats);
    const TacklePercentAvg = findLeagueAverage(leaguePlayersDefensePer90Stats, 'TacklePercent', matchingPlayerDefenseStats);
    const ClearancePer90Avg = findLeagueAverage(leaguePlayersDefensePer90Stats, 'ClearancesPer90', matchingPlayerDefenseStats);
    const TacklesInDefThird = findLeagueAverage(leaguePlayersDefensePer90Stats, 'TacklesInDefensiveThirdPer90', matchingPlayerDefenseStats);
    const TacklesInMiddleThird = findLeagueAverage(leaguePlayersDefensePer90Stats, 'TacklesInMiddleThirdPer90', matchingPlayerDefenseStats);
    const TacklesInAttackingThird = findLeagueAverage(leaguePlayersDefensePer90Stats, 'TacklesInAttackingThirdPer90', matchingPlayerDefenseStats);

    return (
        <div className="text-white text-center">
            <h1 className='text-white text-2xl'>{matchingPlayerStandardStats.Name} Stat Graphs</h1>
            <i className='text-white text-lg'>vs. League Average for Position</i>
            <div className='flex md:pl-0 md:justify-center text-white'>
                <div className='w-1/1 md:w-1/3'>
                    {/* Row 1 - Clickable Stats */}
                    <div className='flex justify-center stat-links'>
                        <p className='p-4 cursor-pointer' onClick={() => handleStatClick('ExpectedGoalsPer90')}>
                            <span className={activeStat === 'ExpectedGoalsPer90' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>xGoals per 90</span>
                        </p>                    
                        <p className='p-4 cursor-pointer' onClick={() => handleStatClick('ExpectedAssistsPer90')}>
                            <span className={activeStat === 'ExpectedAssistsPer90' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>xAssists per 90</span>
                        </p>
                        <p className='p-4 cursor-pointer' onClick={() => handleStatClick('YellowCards')}>
                            <span className={activeStat === 'YellowCards' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>Yellow Cards</span>
                        </p>
                    </div>
                    {/* Row 2 - Clickable Stats */}
                    <div className='flex justify-center stat-links pb-4'>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('GoalsPer90')}>
                            <span className={activeStat === 'GoalsPer90' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>Goals per 90</span>
                        </p>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('AssistsPer90')}>
                            <span className={activeStat === 'AssistsPer90' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>Assists per 90</span>
                        </p>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('ShotsPer90')}>
                            <span className={activeStat === 'ShotsPer90' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>Shots per 90</span>
                        </p>
                    </div>
                    {/* Row 3 - Clickable Stats */}
                    <div className='flex justify-center stat-links pb-4'>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('TacklesPer90')}>
                            <span className={activeStat === 'TacklesPer90' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>Tackles per 90</span>
                        </p>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('TacklePercent')}>
                            <span className={activeStat === 'TacklePercent' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>Tackle Percent</span>
                        </p>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('ClearancesPer90')}>
                            <span className={activeStat === 'ClearancesPer90' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>Clears per 90</span>
                        </p>
                    </div>
                    {/* Row 4 - Clickable Stats */}
                    <div className='flex justify-center stat-links pb-4'>
                        <p className='px-4 cursor-pointer' onClick={() => handleStatClick('tacklesByThird')}>
                            <span className={activeStat === 'tacklesByThird' ? 'text-md lg:text-lg underline': 'text-md lg:text-lg'}>Tackles by Third per 90</span>
                        </p>
                    </div>
                    
                    {/* Expected Goals per 90 */}
                    {activeStat === 'ExpectedGoalsPer90' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerStandardStats.ExpectedGoalsPer90 * 250}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.ExpectedGoalsPer90.toFixed(2)}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.Name.split(' ')[matchingPlayerStandardStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${ExpectedGoalsPer90Avg * 250}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{ExpectedGoalsPer90Avg}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {/* Goals per 90 */}
                    {activeStat === 'GoalsPer90' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerStandardStats.GoalsPer90 * 250}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.GoalsPer90}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.Name.split(' ')[matchingPlayerStandardStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${GoalsPer90Avg * 250}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{GoalsPer90Avg}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {/* Expected Assists per 90 */}
                    {activeStat === 'ExpectedAssistsPer90' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerStandardStats.ExpectedAssistsPer90 * 600}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.ExpectedAssistsPer90.toFixed(2)}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.Name.split(' ')[matchingPlayerStandardStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${ExpectedAssistsPer90Avg * 500}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{ExpectedAssistsPer90Avg}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {/* Assists per 90 */}
                    {activeStat === 'AssistsPer90' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerStandardStats.AssistsPer90 * 500}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.AssistsPer90.toFixed(2)}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.Name.split(' ')[matchingPlayerStandardStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${AssistsPer90Avg * 500}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{AssistsPer90Avg}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {/* Yellow Cards */}
                    {activeStat === 'YellowCards' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerStandardStats.YellowCards * 35}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.YellowCards}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerStandardStats.Name.split(' ')[matchingPlayerStandardStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${YellowCardsAvg * 35}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{YellowCardsAvg}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {/* Shots per 90 */}
                    {activeStat === 'ShotsPer90' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerShootingStats.ShotsPer90 * 50}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerShootingStats.ShotsPer90.toFixed(2)}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerShootingStats.Name.split(' ')[matchingPlayerShootingStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${ShotsPer90Avg * 50}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{ShotsPer90Avg}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {/* Tackles per 90 */}
                    {activeStat === 'TacklesPer90' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerDefenseStats.TacklesPer90 * 50}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefenseStats.TacklesPer90.toFixed(2)}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefenseStats.Name.split(' ')[matchingPlayerDefenseStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${TacklesPer90Avg * 50}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{TacklesPer90Avg}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {/* Tackle Percent */}
                    {activeStat === 'TacklePercent' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerDefenseStats.TacklePercent * 3}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefenseStats.TacklePercent.toFixed(2)} %</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefenseStats.Name.split(' ')[matchingPlayerDefenseStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${TacklePercentAvg * 3}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{TacklePercentAvg} %</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {/* Clears Per 90 */}
                    {activeStat === 'ClearancesPer90' && (
                        <>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayerDefenseStats.ClearancesPer90 * 40}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefenseStats.ClearancesPer90.toFixed(2)}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayerDefenseStats.Name.split(' ')[matchingPlayerDefenseStats.Name.split(' ').length -1]}</p>
                            </div>
                            <div className='flex items-center justify-between pb-4'>
                                <div className='flex items-center'>
                                    <hr className='w-1/2 h-3 bg-white' style={{ width: `${ClearancePer90Avg * 40}px` }} />
                                    <p className='ml-3 text-sm md:text-base'>{ClearancePer90Avg}</p>
                                </div>
                                <p className='ml-3 text-sm md:text-base'>Average</p>
                            </div>
                        </>
                    )}
                    {activeStat === 'tacklesByThird' && (
                    <div class='flex justify-center'>
                        <div className="relative p-4">
                            <img src={thirdsDiagramImage} alt="Thirds Diagram" />
                            <div className="absolute top-[18%] right-8 w-full text-center">
                                <b className='pr-1'>{matchingPlayerDefenseStats.Name.split(' ')[matchingPlayerDefenseStats.Name.split(' ').length -1]}:</b>
                                <b className='pr-6'>{matchingPlayerDefenseStats.TacklesInAttackingThirdPer90}</b>
                                <b className='pr-1'>Average:</b>
                                <b>{TacklesInAttackingThird}</b>
                            </div>  
                            <div className="absolute top-[48%] right-8 w-full text-center">
                                <b className='pr-1'>{matchingPlayerDefenseStats.Name.split(' ')[matchingPlayerDefenseStats.Name.split(' ').length -1]}:</b>
                                <b className='pr-6'>{matchingPlayerDefenseStats.TacklesInMiddleThirdPer90}</b>
                                <b className='pr-1'>Average:</b>
                                <b>{TacklesInMiddleThird}</b>
                            </div>                
                            <div className="absolute top-[78%] right-8 w-full text-center">
                                <b className='pr-1'>{matchingPlayerDefenseStats.Name.split(' ')[matchingPlayerDefenseStats.Name.split(' ').length -1]}:</b>
                                <b className='pr-6'>{matchingPlayerDefenseStats.TacklesInDefensiveThirdPer90}</b>
                                <b className='pr-1'>Average:</b>
                                <b>{TacklesInDefThird}</b>
                            </div>
                        </div>
                    </div>
                    )}                           
                </div>
            </div>
        </div>
    );
};

export default PlayerStatGraph;
