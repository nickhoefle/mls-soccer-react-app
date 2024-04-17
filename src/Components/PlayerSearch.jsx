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
        setsuggestedPlayers(matchingPlayers.slice(0, 6).map(leaguePlayer => leaguePlayer.Name));
    };

    const handleSuggestionClick = (suggestedPlayer) => {
        handlePlayerSearch(suggestedPlayer);
        setsuggestedPlayers([]);
        setSearchBarText('');
    };

    return (
        <div className="flex justify-center lg:p-4">
            <div className="text-white text-center lg:w-1/2">    
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
                        className="text-black rounded-full p-3 lg:w-1/3 text-lg"                
                        placeholder="Search for an MLS Player"
                        value={searchBarText}
                        onChange={handleChange}
                    />
                    <br />
                    {suggestedPlayers.length > 0 && (
                        <div className='lg:flex justify-center'>
                            <ul className="mt-2 bg-white text-black rounded lg:w-1/3">
                                <li className='font-bold underline'>Suggested Players</li>
                                {suggestedPlayers.map((suggestedPlayer, index) => (
                                    <li 
                                        key={index} 
                                        className="cursor-pointer p-1 lg:hover:bg-green-700 hover:text-white text-lg"
                                        onClick={ () => handleSuggestionClick(suggestedPlayer) }                            
                                    >
                                        {suggestedPlayer}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <button
                        className="mt-2 ml-2 px-12 py-2.5 border-solid border-2 border-white rounded-full bg-blue-900 lg:text-xl hover:bg-blue-700"
                    >
                        Search
                    </button>            
                </form>
            </div>
        </div>
    );
};

export default PlayerSearch;
