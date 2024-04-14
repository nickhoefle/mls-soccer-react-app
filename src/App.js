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
import PlayerDropdown1 from './Components/PlayerDropdown1';
import PlayerDropdown2 from './Components/PlayerDropdown2';
import PlayerComparisonChart from './Components/PlayerComparisonChart';
import TeamSeasonGraph from './Components/TeamSeasonGraph';
import TeamSalaryPieChart from './Components/TeamSalaryPieChart';
import TeamHamburger from './Components/TeamHamburger';
import TeamRecordByReferee from './Components/TeamRecordByReferee';
import { getTeamLogoSrc } from './teamLogoHelper';
import { teamRecord } from './teamRecord';

function App() {
  const [player, setPlayer] = useState(null);
  const [team, setTeam] = useState(null);
  const [teamName1, setTeamName1] = useState('');
  const [teamName2, setTeamName2] = useState('');
  const [playerToCompare1, setPlayerToCompare1] = useState('');
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

  function handlePlayerToCompare1(player1) {
    setPlayerToCompare1(player1);
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
          <div className='hidden md:block'>
            <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          </div>
          <PageTitle />
          <div className='sm:block lg:hidden bg-black text-white text-xl pl-6 pt-4'>
            <TeamHamburger handleTeamSelect={handleTeamSelect} />
          </div>
          <div className="flex justify-center lg:px-4 pb-8">
            <div className="sm:block lg:hidden w-full">
              <LeagueLeadersSwiper setPlayer={setPlayer} />
            </div>
            <div className="hidden pt-4 lg:block text-white text-center">
              <LeagueLeaders setPlayer={setPlayer} />
            </div>
          </div>          
          <div className="text-white text-center">
              {player && <PlayerStatGraph playerName={player} />}
          </div>
          <div className="flex justify-center lg:p-4">
            <div className="text-white text-center">
              <PlayerSearch handlePlayerSearch={handlePlayerSearch} />
            </div>
          </div>
          <div className='flex justify-center lg:pb-4'>
            <h2 className='text-white text-2xl'>Player Comparison</h2>
          </div>
          <div className='md:flex md:justify-center lg:pb-0'>
            <div className="text-white text-center md:pr-10 pb-6 md:pb-0">
              <TeamDropdown teamName={teamName1} setTeamName1={handleTeamNameSelect} />
              {teamName1 && <PlayerDropdown1 teamName1={teamName1} playerToCompare1={playerToCompare1} setPlayerToCompare1={handlePlayerToCompare1}/>}
            </div>
            <div className="text-white text-center pb-10 md:pb-0">
              <TeamDropdown2 teamName2={teamName2} setTeamName2={handleTeamName2Select} />
              {teamName2 && <PlayerDropdown2 teamName2={teamName2} playerToCompare2={playerToCompare2} setPlayerToCompare2={handlePlayerToCompare2}/>}
            </div>
          </div>
          <div className="text-white text-center lg:pb-10">
            {playerToCompare1 && playerToCompare2 && <PlayerComparisonChart playerToCompare1={playerToCompare1} playerToCompare2={playerToCompare2} />}
          </div>
        </Route>

        <Route path="/team/:teamId">
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          <PageTitle />
          <div className='sm:block lg:hidden bg-black text-white text-xl pl-6 pt-4'>
            <TeamHamburger handleTeamSelect={handleTeamSelect} />
          </div>
          <div className='flex justify-center lg:pt-2 md:pt-8'>
            <img src={getTeamLogoSrc(team)} alt={`${team} Logo`} className="flex justify-center h-32" />
          </div>
          <div className='flex justify-center'>
            <h2 className='text-white text-2xl bold font-bold'>{team}</h2>
          </div>
          <div className='flex justify-center'>
            <p className='text-white font-bold'>({teamRecord(team)})</p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center lg:p-4">            
            <button
              className={`text-white text-lg py-2 md:mr-4 ${activeComponent === 'roster' ? 'underline font-bold' : ''}`}
              onClick={() => handleComponentClick('roster')}
            >
              Team Roster and Stats
            </button>
            <button
              className={`text-white text-lg py-2 md:mr-4 ${activeComponent === 'matches' ? 'underline font-bold' : ''}`}
              onClick={() => handleComponentClick('matches')}
            >
              Past Matches
            </button>
            <button
              className={`text-white text-lg py-2 md:mr-4 ${activeComponent === 'graph' ? 'underline font-bold' : ''}`}
              onClick={() => handleComponentClick('graph')}
            >
              Goal Differential Graph
            </button>
            <button
              className={`text-white text-lg py-2 md:mr-4 hidden md:block ${activeComponent === 'chart' ? 'underline font-bold' : ''}`}
              onClick={() => handleComponentClick('chart')}
            >
              Team Salary Chart
            </button>
            <button
              className={`text-white text-lg py-2 md:mr-4 ${activeComponent === 'referee' ? 'underline font-bold' : ''}`}
              onClick={() => handleComponentClick('referee')}
            >
              Wins/Losses by Referee
            </button>
          </div>
          {team && (
            <>
              {activeComponent === 'roster' && <TeamRoster team={team} />}
              {activeComponent === 'matches' && <TeamPastMatches team={team} />}
              {activeComponent === 'graph' && <TeamSeasonGraph team={team} />}
              {activeComponent === 'chart' && <TeamSalaryPieChart team={team} />}
              {activeComponent === 'referee' && <TeamRecordByReferee team={team} />}
            </>
          )}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
