import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path ="/login">
            <Login/>
          </Route>
          <Route path ="/detail">
            <Detail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      
      
    </>
  );
}

export default App;
