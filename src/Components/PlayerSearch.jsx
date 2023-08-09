import React, { useState } from 'react';
import playerStats from '../data/leaguePlayersStandardStatsRawData.json';
import diacriticless from 'diacriticless';

const PlayerSearch = ({ handlePlayerSearch }) => {
    const [playerName, setPlayerName] = useState('');
    const [suggestedPlayers, setsuggestedPlayers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePlayerSearch(playerName);
        setsuggestedPlayers([]); 
    };

    const handleChange = (e) => {
        const searchBarText = e.target.value;
        setPlayerName(searchBarText);
        const suggestedPlayers = generateSuggestions(searchBarText);
        setsuggestedPlayers(suggestedPlayers);
    };

    const generateSuggestions = (searchBarText) => {
        const matchingPlayers = playerStats.filter((player) => {
            const playerNameLowercase = diacriticless(player.Player.toLowerCase());
            const searchBarTextLowercase = searchBarText.toLowerCase();
            return playerNameLowercase.includes(searchBarTextLowercase);
        });

        const suggestedPlayers = matchingPlayers.slice(0, 5).map((player) => player.Player);
        return suggestedPlayers;
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl text-white pb-4">Search Player</h1>
            <input
                className="text-black rounded-full p-3"                
                placeholder="Search for an MLS Player"
                value={playerName}
                onChange={handleChange}
            />
            <br></br>
            {suggestedPlayers.length > 0 && (
                <ul className="mt-2 bg-white text-black rounded">
                    <li className='font-bold underline'>Suggested Players</li>
                    {suggestedPlayers.map((suggestedPlayer) => (
                        <li key={suggestedPlayer} 
                        onClick={() => { setPlayerName(suggestedPlayer); handleSubmit(suggestedPlayer); setsuggestedPlayers([]); } }
                        className="cursor-pointer"
                        >{suggestedPlayer}</li>
                    ))}
                </ul>
            )}
            <button
                className="mt-2 ml-2 px-12 py-2.5 border-solid border-2 border-white rounded-full bg-blue-900"
            >
                Search
            </button>

            
        </form>
    );
};

export default PlayerSearch;
