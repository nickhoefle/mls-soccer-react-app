import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_KEY } from '../api-key';

const TeamPlayers = () => {
    const location = useLocation();
    const teamId = location.pathname.split('/').pop();

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/lookup_all_players.php?id=${teamId}`)
        .then(response => response.json())
            .then(data => {
                setPlayers(data.player.sort((a,b) =>
                a.strPlayer.split(' ').pop().localeCompare(b.strPlayer.split(' ').pop())
                ));
            })
        .catch(error => console.error(error));
    }, [teamId]);

    return (
        <div>
        {players.map(player => (
            <div key={player.idPlayer} className='flex justify-left'>
            <div className='rounded-full'>
                <img src={player.strCutout} width='50px' className='rounded-full'/>
            </div>
            <h1 className='text-white mt-5'>{player.strPlayer} - </h1>
            <h1 className='text-white mt-5'>{player.strPosition}</h1>
            </div>
        ))}
        </div>
    );
};

export default TeamPlayers;
