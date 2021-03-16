import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
export default App;
/*import logo from './logo.svg';*/


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component= {Home}/>
        </Switch>
      </Router>
      
    </>
  );
}
