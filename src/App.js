import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerSearch from './Components/PlayerSearch';
import TeamLogoStrip from './Components/TeamLogoStrip';
import PlayerStatGraph from './Components/PlayerStatGraph';
import LeagueLeaders from './Components/LeagueLeaders';
import TeamRoster from './Components/TeamRoster';
import PageTitle from './Components/PageTitle';
import TeamPastMatches from './Components/TeamPastMatches';

function App() {
  const [player, setPlayer] = useState(null);
  const [team, setTeam] = useState(null);

  function handleSubmit(player) {
    setPlayer(player);
  }

  function handleTeamSelect(team) {
    setTeam(team);
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
        </Route>
        <Route path="/team/:teamId">
          <TeamLogoStrip handleTeamSelect={handleTeamSelect} />
          <PageTitle />          
          {team && <TeamRoster team={team} setPlayer={setPlayer} />}
          <TeamPastMatches team={team} />
          <div className="text-white text-center bg-black opacity-75 pb-10">
            {player && <PlayerStatGraph playerName={player} />}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
