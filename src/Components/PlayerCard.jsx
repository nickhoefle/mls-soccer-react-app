import React from 'react';
import data from '../csvjson.json';


const PlayerCard = ({ player }) => {
    const matchingPlayer = data.find(p => p.Player === player.strPlayer);
    // console.log(data);

    return (
        <div>
            <h1 className='text-white text-xl'>{player.strPlayer}</h1>
            <div className='flex justify-center items-center'>
                <img src={player.strCutout}
                    className='rounded-full'
                    height='75px'
                    width='75px'
                    alt={player.strPlayer}
                    />
            </div>    
            <p className='text-white'>{player.strPosition}</p>
            <p className='text-white'>{player.strTeam}</p>
            <p className='text-white'>{player.dateBorn}</p>
            <p className='text-white'>{player.strBirthLocation}</p>
            {/* <p className='text-white'>Matches Played: {matchingPlayer.MP}</p>
            <p className='text-white'>Minutes Played: {matchingPlayer.Min}</p>
            <p className='text-white'>Goals: {matchingPlayer.Gls}</p> */}
        </div>
    );
};

export default PlayerCard;