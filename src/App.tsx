import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useStyles from './App.styles';

import './App.styles.ts';
import AirplanesGame from './components/game/AirplanesGame';
import Homepage from './components/homepage/Homepage';
import ScoresList from './components/scores/ScoresList';

const App: React.FC = () => {

  const classes = useStyles();
  const [gridSize, setGridSize] = useState(5);

  return (
    <div className={classes.topLevelContainer}>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Homepage gridSize={gridSize} setGridSize={(gs) => setGridSize(gs)} />
          </Route>
          <Route path="/game">
            <AirplanesGame gridSize={gridSize} />
          </Route>
          <Route path="/scores">
            <ScoresList />
          </Route>
          <Route path="/">
            <Homepage gridSize={gridSize} setGridSize={(gs) => setGridSize(gs)} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
