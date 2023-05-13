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
            console.log(data.player)
            setPlayers(data.player);
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
            <h1 className='text-white mt-5'>{player.strPlayer}</h1>
            </div>
        ))}
        </div>
    );
};

export default TeamPlayers;
