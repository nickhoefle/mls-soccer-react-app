import React, { useState } from 'react';
import '../styles.css';
import data from '../data/player-standard-stats.json';
import shootingStats from '../data/shooting-stats.json';
import diacriticless from 'diacriticless';

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
        
        const positionsToInclude = matchingPositions[matchingPlayer.Pos.replace(',', '').toLowerCase()];
        
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
        diacriticless(p.Player.toLowerCase()).includes(searchedPlayerName)
    );

    const xgPer90 = sumStat(data, 'xG__1', matchingPlayer);
    const xaPer90 = sumStat(data, 'xAG__1', matchingPlayer);
    const yellowCards = sumStat(data, 'CrdY', matchingPlayer);
    const shotsPer90 = sumStat(shootingStats, 'Sh90', matchingPlayerShooting);
    const shotsOnTargetPer90 = sumStat(shootingStats, 'SoT90', matchingPlayerShooting);

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

                    {activeStat === 'xgPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayer.xG__1 * 350}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayer.xG__1}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${xgPer90 * 350}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{xgPer90}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}

                    {activeStat === 'xaPer90' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayer.xAG__1 * 500}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayer.xAG__1}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${xaPer90 * 500}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{xaPer90}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>Average</p>
                        </div>
                    </div>
                    )}

                    {activeStat === 'yellowCards' && (
                    <div className='stat-content'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${matchingPlayer.CrdY * 20}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{matchingPlayer.CrdY}</p>
                            </div>
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player.split(' ')[matchingPlayer.Player.split(' ').length -1]}</p>
                        </div>
                        <div className='flex items-center justify-between pb-4'>
                            <div className='flex items-center'>
                                <hr className='w-1/2 h-3 bg-white' style={{ width: `${yellowCards * 20}px` }} />
                                <p className='ml-3 text-sm md:text-base'>{yellowCards}</p>
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
