import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerSearch from './Components/PlayerSearch';
import TeamLogoStrip from './Components/TeamLogoStrip';
import PlayerStatGraph from './Components/PlayerStatGraph';
import LeagueLeaders from './Components/LeagueLeaders';
import TeamRoster from './Components/TeamRoster';
import PageTitle from './Components/PageTitle';
import TeamPastMatches from './Components/TeamPastMatches';
import TeamDropdown from './Components/TeamDropdown';
import TeamDropdown2 from './Components/TeamDropdown2';
import PlayerDropdown from './Components/PlayerDropdown';
import PlayerDropdown2 from './Components/PlayerDropdown2';
import PlayerComparisonChart from './Components/PlayerComparisonChart';
import TeamSeasonGraph from './Components/TeamSeasonGraph';

function App() {
  const [player, setPlayer] = useState(null);
  const [team, setTeam] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [teamName2, setTeamName2] = useState('');
  const [playerToCompare, setPlayerToCompare] = useState('');
  const [playerToCompare2, setPlayerToCompare2] = useState('');
  const [activeComponent, setActiveComponent] = useState('roster');

  function handleSubmit(player) {
    setPlayer(player);
  }

  function handleTeamSelect(team) {
    setTeam(team);
  }

  function handleTeamNameSelect(teamName) {
    setTeamName(teamName);
  }

  function handleTeamName2Select(teamName2) {
    setTeamName2(teamName2);
  }

  function handlePlayerToCompare(player) {
    setPlayerToCompare(player);
  }

  function handlePlayerToCompare2(player2) {
    setPlayerToCompare2(player2);
  }

  function handleComponentClick(component) {
    setActiveComponent(component);
  }

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          <PageTitle />
          <br></br>
          <div className="flex justify-center bg-black opacity-75 p-4">
            <div className="text-white text-center opacity-75">
              <LeagueLeaders setPlayer={setPlayer} />
            </div>
          </div>
          <br></br>
          <div className="flex justify-center bg-black opacity-75 p-4">
            <div className="text-white text-center opacity-75">
              <PlayerSearch handleSubmit={handleSubmit} />
            </div>
          </div>
          <div className="text-white text-center bg-black opacity-75 pb-10">
              {player && <PlayerStatGraph playerName={player} />}
          </div>
          <br />
          <div className='flex justify-center bg-black opacity-75 pb-4'>
            <h2 className='text-white text-2xl opacity-75'>Player Comparison</h2>
          </div>
          <div className='flex justify-center bg-black opacity-75 pb-0'>
            <div className="text-white text-center pr-20">
              <h2 className='underline'>Player 1</h2>
              <TeamDropdown teamName={teamName} setTeamName={handleTeamNameSelect} />
              {teamName && <PlayerDropdown teamName={teamName} playerToCompare={playerToCompare} setPlayerToCompare={handlePlayerToCompare}/>}
            </div>
            <div className="text-white text-center">
              <h2 className='underline'>Player 2</h2>
              <TeamDropdown2 teamName2={teamName2} setTeamName2={handleTeamName2Select} />
              {teamName2 && <PlayerDropdown2 teamName2={teamName2} playerToCompare2={playerToCompare2} setPlayerToCompare2={handlePlayerToCompare2}/>}
            </div>
          </div>
          <div className="text-white text-center bg-black opacity-75 pb-10">
            {playerToCompare && playerToCompare2 && <PlayerComparisonChart playerToCompare={playerToCompare} playerToCompare2={playerToCompare2} />}
          </div>
        </Route>

        <Route path="/team/:teamId">
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
            <PageTitle />
              <div className='flex justify-center bg-black opacity-75 pt-8'>
                <h2 className='text-white text-2xl bold'>{team}</h2>
              </div>
              <div className="flex justify-center bg-black opacity-75 p-4">            
                <button
                  className={`mr-4 text-white text-lg ${activeComponent === 'roster' ? 'underline' : ''}`}
                  onClick={() => handleComponentClick('roster')}
                >
                  Team Roster and Stats
                </button>
                <button
                  className={`mr-4 text-white text-lg ${activeComponent === 'matches' ? 'underline' : ''}`}
                  onClick={() => handleComponentClick('matches')}
                >
                  Past Matches
                </button>
                <button
                  className={`mr-4 text-white text-lg ${activeComponent === 'graph' ? 'underline' : ''}`}
                  onClick={() => handleComponentClick('graph')}
                >
                  Goal Differential Graph
                </button>
              </div>
              {team && (
                <>
                  {activeComponent === 'roster' && <TeamRoster team={team} setPlayer={setPlayer} />}
                  {activeComponent === 'matches' && <TeamPastMatches team={team} />}
                  {activeComponent === 'graph' && <TeamSeasonGraph team={team} />}
                </>
              )}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
