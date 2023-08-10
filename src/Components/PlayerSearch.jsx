import React, { useState } from 'react';
import diacriticless from 'diacriticless';
import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../dataCleaner'; 

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);

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
        const matchingPlayers = leaguePlayersStandardStats.filter((leaguePlayer) => {
            return diacriticless(leaguePlayer.Name.toLowerCase()).includes(diacriticless(searchBarText.toLowerCase()));
        });

        const suggestedPlayers = matchingPlayers.slice(0, 5).map((matchingPlayer) => matchingPlayer.Name);
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
            <br />
            {suggestedPlayers.length > 0 && (
                <ul className="mt-2 bg-white text-black rounded">
                    <li className='font-bold underline'>Suggested Players</li>
                    {suggestedPlayers.map((suggestedPlayer) => (
                        <li 
                            key={suggestedPlayer} 
                            className="cursor-pointer"
                            onClick={(e) => { 
                                e.preventDefault();
                                setPlayerName(suggestedPlayer); 
                                handleSubmit(e);
                            }}                            
                        >
                            {suggestedPlayer}
                        </li>
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
