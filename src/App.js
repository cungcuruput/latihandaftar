import React from 'react';
//import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
            </Route>
            <Route path='/register'>
              <Register/>
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
