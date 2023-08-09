import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerSearch from './Components/PlayerSearch';
import TeamLogoStrip from './Components/TeamLogoStrip';
import PlayerStatGraph from './Components/PlayerStatGraph';
import LeagueLeaders from './Components/LeagueLeaders';
import LeagueLeadersSwiper from './Components/LeagueLeadersSwiper';
import TeamRoster from './Components/TeamRoster';
import PageTitle from './Components/PageTitle';
import TeamPastMatches from './Components/TeamPastMatches';
import TeamDropdown from './Components/TeamDropdown';
import TeamDropdown2 from './Components/TeamDropdown2';
import PlayerDropdown from './Components/PlayerDropdown';
import PlayerDropdown2 from './Components/PlayerDropdown2';
import PlayerComparisonChart from './Components/PlayerComparisonChart';
import TeamSeasonGraph from './Components/TeamSeasonGraph';
import TeamSalaryPieChart from './Components/TeamSalaryPieChart';
import TeamHamburger from './Components/TeamHamburger';

function App() {
  const [player, setPlayer] = useState(null);
  const [team, setTeam] = useState(null);
  const [teamName1, setTeamName1] = useState('');
  const [teamName2, setTeamName2] = useState('');
  const [playerToCompare, setPlayerToCompare] = useState('');
  const [playerToCompare2, setPlayerToCompare2] = useState('');
  const [activeComponent, setActiveComponent] = useState('roster');

  function handlePlayerSearch(player) {
    setPlayer(player);
  }

  function handleTeamSelect(team) {
    setTeam(team);
  }

  function handleTeamNameSelect(teamName1) {
    setTeamName1(teamName1);
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
          <div className='sm:block lg:hidden bg-black text-white text-xl pl-6 pt-4'>
            <TeamHamburger handleTeamSelect={handleTeamSelect} />
          </div>
          <div className="flex justify-center bg-black lg:opacity-75 px-4 pb-8">
            <div className="sm:block lg:hidden w-full">
              <LeagueLeadersSwiper setPlayer={setPlayer} />
            </div>
            <div className="hidden pt-4 lg:block text-white text-center lg:opacity-75">
              <LeagueLeaders setPlayer={setPlayer} />
            </div>
          </div>          
          <div className="text-white text-center bg-black lg:opacity-75">
              {player && <PlayerStatGraph playerName={player} />}
          </div>
          <div className="flex justify-center bg-black lg:opacity-75 p-4">
            <div className="text-white text-center lg:opacity-75">
              <PlayerSearch handlePlayerSearch={handlePlayerSearch} />
            </div>
          </div>
          <div className='flex justify-center bg-black lg:opacity-75 pb-4'>
            <h2 className='text-white text-2xl lg:opacity-75'>Player Comparison</h2>
          </div>
          <div className='md:flex md:justify-center bg-black lg:opacity-75 pb-0'>
            <div className="text-white text-center md:pr-10 pb-6 md:pb-0">
              <h2 className='underline'>Player 1</h2>
              <TeamDropdown teamName={teamName1} setTeamName1={handleTeamNameSelect} />
              {teamName1 && <PlayerDropdown teamName1={teamName1} playerToCompare={playerToCompare} setPlayerToCompare={handlePlayerToCompare}/>}
            </div>
            <div className="text-white text-center pb-10 md:pb-0">
              <h2 className='underline'>Player 2</h2>
              <TeamDropdown2 teamName2={teamName2} setTeamName2={handleTeamName2Select} />
              {teamName2 && <PlayerDropdown2 teamName2={teamName2} playerToCompare2={playerToCompare2} setPlayerToCompare2={handlePlayerToCompare2}/>}
            </div>
          </div>
          <div className="text-white text-center bg-black lg:opacity-75 pb-10">
            {playerToCompare && playerToCompare2 && <PlayerComparisonChart playerToCompare={playerToCompare} playerToCompare2={playerToCompare2} />}
          </div>
        </Route>

        <Route path="/team/:teamId">
          <div className='hidden md:block'>
            <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          </div>
          <PageTitle />
          <div className='sm:block lg:hidden bg-black text-white text-xl pl-6 pt-4'>
            <TeamHamburger handleTeamSelect={handleTeamSelect} />
          </div>
            <div className='flex justify-center bg-black lg:opacity-75 pt-2 md:pt-8'>
              <h2 className='text-white text-2xl bold'>{team}</h2>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center bg-black lg:opacity-75 p-4">            
              <button
                className={`mr-4 text-white text-lg py-2 ${activeComponent === 'roster' ? 'underline' : ''}`}
                onClick={() => handleComponentClick('roster')}
              >
                Team Roster and Stats
              </button>
              <button
                className={`mr-4 text-white text-lg py-2 ${activeComponent === 'matches' ? 'underline' : ''}`}
                onClick={() => handleComponentClick('matches')}
              >
                Past Matches
              </button>
              <button
                className={`mr-4 text-white text-lg py-2 ${activeComponent === 'graph' ? 'underline' : ''}`}
                onClick={() => handleComponentClick('graph')}
              >
                Goal Differential Graph
              </button>
              <button
                className={`mr-4 text-white text-lg py-2 hidden md:block ${activeComponent === 'chart' ? 'underline' : ''}`}
                onClick={() => handleComponentClick('chart')}
              >
                Team Salary Chart
              </button>
            </div>
            {team && (
              <>
                {activeComponent === 'roster' && <TeamRoster team={team} setPlayer={setPlayer} />}
                {activeComponent === 'matches' && <TeamPastMatches team={team} />}
                {activeComponent === 'graph' && <TeamSeasonGraph team={team} />}
                {activeComponent === 'chart' && <TeamSalaryPieChart team={team} />}
              </>
            )}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
