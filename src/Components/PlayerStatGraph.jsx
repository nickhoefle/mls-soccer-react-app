import React from 'react';
import data from '../data/player-standard-stats.json';
import shootingStats from '../data/shooting-stats.json';
import diacriticless from 'diacriticless';

const PlayerStatGraph = ({ playerName }) => {

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
            <h1 className='text-white text-xl'>
                Stat Graphs for {matchingPlayer ? matchingPlayer.Player : playerName}
            </h1>            
            <div className='flex pt-4 pl-5 md:pl-0 md:justify-center'>
                {matchingPlayer ? (
                <div className='w-1/1 md:w-1/3'>
                    <h2 className='underline pb-4'>Expected Goals per 90</h2>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <hr className='w-1/2 bg-gray-400' style={{ width: `${matchingPlayer.xG__1 * 500}px` }} />
                            <p className='ml-3'>{matchingPlayer.xG__1}</p>
                        </div>
                        <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player}</p>
                    </div>
                    <div className='flex items-center justify-between pb-4'>
                        <div className='flex items-center'>
                            <hr className='w-1/2 bg-gray-400' style={{ width: `${xgPer90 * 500}px` }} />
                            <p className='ml-3 text-sm md:text-base'>{xgPer90}</p>
                        </div>
                        <p className='ml-3 text-sm md:text-base'>Average for Position</p>
                    </div>

                    <h2 className='underline pb-4'>Expected Assists per 90</h2>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <hr className='w-1/2 bg-gray-400' style={{ width: `${matchingPlayer.xAG__1 * 500}px` }} />
                            <p className='ml-3'>{matchingPlayer.xAG__1}</p>
                        </div>
                        <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player}</p>
                    </div>
                    <div className='flex items-center justify-between pb-4'>
                        <div className='flex items-center'>
                            <hr className='w-1/2 bg-gray-400' style={{ width: `${xaPer90 * 500}px` }} />
                            <p className='ml-3 text-sm md:text-base'>{xaPer90}</p>
                        </div>
                        <p className='ml-3 text-sm md:text-base'>Average for Position</p>
                    </div>

                    <h2 className='underline pb-4'>Yellow Cards</h2>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <hr className='w-1/2 bg-gray-400' style={{ width: `${matchingPlayer.CrdY * 20}px` }} />
                            <p className='ml-3 text-sm md:text-base'>{matchingPlayer.CrdY}</p>
                        </div>
                        <p className='ml-3 text-sm md:text-base'>{matchingPlayer.Player}</p>
                    </div>
                    <div className='flex items-center justify-between pb-4'>
                        <div className='flex items-center'>
                            <hr className='w-1/2 bg-gray-400' style={{ width: `${yellowCards * 20}px` }} />
                            <p className='ml-3'>{yellowCards}</p>
                        </div>
                        <p className='ml-3 text-sm md:text-base'>Average for Position</p>
                    </div>
                </div>
                ) : (
                <p>No matching player found.</p>
                )}
            </div>
        </>
    );
};

export default PlayerStatGraph;
