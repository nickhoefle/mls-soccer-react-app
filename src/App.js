import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerSearch from './Components/PlayerSearch';
import PlayerCard from './Components/PlayerCard';
import './styles.css';
import './index.css';
import TeamLogoStrip from './Components/TeamLogoStrip';
import LiveSchedule from './Components/LiveSchedule';
import PlayerStatGraph from './Components/PlayerStatGraph';
import TeamPage from './Components/TeamPage';
import TeamPlayers from './Components/TeamPlayers';

function App() {
  const [player, setPlayer] = useState(null);

  function handleSubmit(player) {
    setPlayer(player);
  }

  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <TeamLogoStrip />
            <div className="bg-black p-6 content-center">
              <h1 className="text-white text-center text-4xl">MLStats by Nick</h1>
            </div>
            <br></br>
            <div className='flex justify-center bg-black opacity-75 p-4'>
              <div className='text-white text-center'>
                <LiveSchedule />
              </div>
            </div>
            <br></br>
            <div className='flex justify-center bg-black opacity-75 p-4'>
              <div className='text-white text-center opacity-75'>
                <PlayerSearch handleSubmit={handleSubmit} />
                <div className='py-5'>
                  {player && <PlayerCard player={player} />}
                </div>
                <div className='py-2'>
                  {player && <PlayerStatGraph player={player} />}
                </div>
              </div>
            </div>
        </Route>
        <Route path="/team/:teamId">
          <TeamLogoStrip />
          <TeamPlayers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
