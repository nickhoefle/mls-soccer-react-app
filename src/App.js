import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerSearch from './Components/PlayerSearch';
import TeamLogoStrip from './Components/TeamLogoStrip';
import PlayerStatGraph from './Components/PlayerStatGraph';
import LeagueLeaders from './Components/LeagueLeaders';
import LeagueLeadersSwiper from './Components/LeagueLeadersSwiper';
import PageTitle from './Components/PageTitle';
import HamburgerMenu from './Components/HamburgerMenu';
import { teamRecord } from './teamRecord';
import PlayerComparisonSection from './Components/PlayerComparisonSection';
import TeamRouteContent from './Components/TeamRouteContent';

function App() {
  const [player, setPlayer] = useState(null);
  const [team, setTeam] = useState(null);
  const [teamName1, setTeamName1] = useState('');
  const [teamName2, setTeamName2] = useState('');
  const [playerToCompare1, setPlayerToCompare1] = useState('');
  const [playerToCompare2, setPlayerToCompare2] = useState('');
  const [activeComponent, setActiveComponent] = useState('roster');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePlayerClick = (playerName) => {
    setPlayer(playerName);
  };

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

  const handleToggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseDropdown = () => {
      setIsMenuOpen(false);
  };

  return (
    <Router>
      <Switch>
        
        <Route exact path="/">                    
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          <PageTitle />
          <HamburgerMenu 
            handleTeamSelect={handleTeamSelect} 
            isMenuOpen={isMenuOpen}
            handleToggleDropdown={handleToggleDropdown}
            handleCloseDropdown={handleCloseDropdown}
          />

          {!isMenuOpen && ( 
            <div className="flex justify-center lg:px-4 pb-8">
              <LeagueLeadersSwiper handlePlayerClick={handlePlayerClick} />           
              <LeagueLeaders handlePlayerClick={handlePlayerClick} />
            </div>   
          )}       

          {player && !isMenuOpen && <PlayerStatGraph playerName={player} />}
          
          {!isMenuOpen && ( 
            <PlayerSearch handlePlayerClick={handlePlayerClick} />
          )}
        </Route>

        <Route path="/team/:teamId">
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          <PageTitle />
          <HamburgerMenu 
            handleTeamSelect={handleTeamSelect} 
            isMenuOpen={isMenuOpen}
            handleToggleDropdown={handleToggleDropdown}
            handleCloseDropdown={handleCloseDropdown}
          />
          <TeamRouteContent 
            team={team}
            teamRecord={teamRecord}
            activeComponent={activeComponent}
            handleComponentClick={handleComponentClick}
          />
        </Route>

        <Route exact path="/playercomp">
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} /> 
          <PageTitle />
          <HamburgerMenu 
            handleTeamSelect={handleTeamSelect} 
            isMenuOpen={isMenuOpen}
            handleToggleDropdown={handleToggleDropdown}
            handleCloseDropdown={handleCloseDropdown}
          />
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
