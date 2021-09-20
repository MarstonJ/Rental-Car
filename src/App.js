import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Confirm from './components/Pages/Confirm.js';
import Rental from './components/Pages/Rental.js';

class App extends React.Component {
     
  render(){
    return (
      <>
      <Router>
        <Switch>
          <Route path='/' exact component={Rental} car="3" />
          <Route path='/confirm' component={Confirm} car="3" />
        </Switch>
      </Router>
    </>
    );
    }
}

export default App;


