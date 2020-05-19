import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Tracks } from './components/TrackList';
import Track from './components/Track';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Tracks} />
          <Route exact path='/tracks/:id' component={Tracks} />
          <Route path='/tracks/artist/:name' component={Tracks} />
      </Switch>
    </Router>
  );
}

export default App;
