import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useStyles from './App.styles';

import './App.styles.ts';
import AirplanesGame from './components/game/AirplanesGame';
import Homepage from './components/homepage/Homepage';
import ScoresList from './components/scores/ScoresList';

const App: React.FC = () => {

  const classes = useStyles();

  return (
    <div className={classes.topLevelContainer}>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/game">
            <AirplanesGame />
          </Route>
          <Route path="/scores">
            <ScoresList />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
