import React, { useState } from 'react';
import { API_KEY } from '../api-key';

const PlayerSearch = ({ handleSubmit }) => {
    const [playerName, setPlayerName] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchplayers.php?p=${playerName}`)
        .then(response => response.json())
        .then(data => {
            const player = data.player[0];
            handleSubmit(player);
            setPlayerName('');
        })
    };

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    return (
        <form onSubmit={handleSearch}>
            <h1 className='text-2xl pb-5 text-white'>Search Player</h1>
            <input
                className='p-3 border-solid border-2 border-black rounded-full text-black'
                type='text' 
                placeholder='Search for an MLS Player' 
                value={playerName}
                onChange={handleInputChange} 
            />
            <button 
                className='ml-2 px-12 py-2.5 border-solid border-2 border-white rounded-full bg-blue-900'
                type='submit'>Search
            </button>
        </form>
    );
};

export default PlayerSearch;