import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Docs from './pages/Docs';
import Contributing from './pages/Contributing';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
          <Header
            text='Grass Roots React'
            color='cyan'
          />
          <Switch>
            <Route exact path={['/','/docs']}>
              <Docs/>
            </Route>
            <Route exact path='/contributing'>
              <Contributing/>
            </Route>
            <Route exact path='/about'>
              <About/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
