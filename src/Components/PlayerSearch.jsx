import React, { useState } from 'react';
import diacriticless from 'diacriticless';
import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../dataCleaner'; 

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);

const PlayerSearch = ({ handlePlayerSearch }) => {
    const [searchBarText, setSearchBarText] = useState('');
    const [suggestedPlayers, setsuggestedPlayers] = useState([]);

    const handleChange = (e) => {
        const searchBarText = e.target.value;
        setSearchBarText(searchBarText);
        const matchingPlayers = leaguePlayersStandardStats.filter(leaguePlayer =>
            diacriticless(leaguePlayer.Name.toLowerCase()).includes(diacriticless(searchBarText.toLowerCase()))
        );
        setsuggestedPlayers(matchingPlayers.slice(0, 5).map(leaguePlayer => leaguePlayer.Name));
    };

    const handleSuggestionClick = (suggestedPlayer) => {
        handlePlayerSearch(suggestedPlayer);
        setsuggestedPlayers([]);
        setSearchBarText('');
    };

    return (
        <div className="flex justify-center lg:p-4">
            <div className="text-white text-center">    
                <form 
                    onSubmit={(e) => { 
                        e.preventDefault(); 
                        handlePlayerSearch(searchBarText);
                        setsuggestedPlayers([]);
                        setSearchBarText('');
                    }}
                >
                    <h1 className="text-2xl text-white pb-4">Search Player</h1>
                    <input
                        className="text-black rounded-full p-3"                
                        placeholder="Search for an MLS Player"
                        value={searchBarText}
                        onChange={handleChange}
                    />
                    <br />
                    {suggestedPlayers.length > 0 && (
                        <ul className="mt-2 bg-white text-black rounded">
                            <li className='font-bold underline'>Suggested Players</li>
                            {suggestedPlayers.map((suggestedPlayer, index) => (
                                <li 
                                    key={index} 
                                    className="cursor-pointer"
                                    onClick={ () => handleSuggestionClick(suggestedPlayer) }                            
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
            </div>
        </div>
    );
};

export default PlayerSearch;
