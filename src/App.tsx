import React from 'react';
import Homepage from './pages/Homepage/Homepage';
// React Router Imports
import { Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
