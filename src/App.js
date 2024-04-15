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
import TeamSeasonGraph from './Components/TeamSeasonGraph';
import TeamSalaryPieChart from './Components/TeamSalaryPieChart';
import TeamHamburger from './Components/TeamHamburger';
import TeamRecordByReferee from './Components/TeamRecordByReferee';
import { getTeamLogoSrc } from './teamLogoHelper';
import { teamRecord } from './teamRecord';
import PlayerComparisonSection from './Components/PlayerComparisonSection';

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
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          <PageTitle />
          <TeamHamburger handleTeamSelect={handleTeamSelect} />
          
          <div className="flex justify-center lg:px-4 pb-8">
            <LeagueLeadersSwiper setPlayer={setPlayer} />           
            <LeagueLeaders setPlayer={setPlayer} />
          </div>          
        
          {player && <PlayerStatGraph playerName={player} />}
          <PlayerSearch handlePlayerSearch={handlePlayerSearch} />
        </Route>

        <Route path="/team/:teamId">
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          <PageTitle />
          <TeamHamburger handleTeamSelect={handleTeamSelect} />

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

        <Route exact path="/playercomp">
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} /> 
          <PageTitle />
          <TeamHamburger handleTeamSelect={handleTeamSelect} />
          <PlayerComparisonSection
            teamName1={teamName1}
            teamName2={teamName2}
            playerToCompare1={playerToCompare1}
            playerToCompare2={playerToCompare2}
            handlePlayerToCompare1={handlePlayerToCompare1}
            handlePlayerToCompare2={handlePlayerToCompare2}
            handleTeamNameSelect={handleTeamNameSelect}
            handleTeamName2Select={handleTeamName2Select}
          />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
