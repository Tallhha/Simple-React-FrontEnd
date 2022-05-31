import logo from './logo.svg';
import './App.css';

import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import { Fragment } from 'react';

import {Home} from './components/Home';
import {Dashboard} from './components/Dashboard';
import {Projects} from './components/Projects';
import {Tasks} from './components/Tasks';
import {Teams} from './components/Teams';


function App() {

  return (
  
    <Router>
        <Fragment>
          <h1>Project Manager Interface.</h1>

          <nav>
            <ul id="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/tasks">Tasks</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/dashboard" exact element={<Dashboard/>} /> 
            <Route path="/projects" exact element={<Projects/>} />
            <Route path="/teams" exact element={<Teams/>} />
            <Route path="/tasks" exact element={<Tasks/>} />
          </Routes>
        
        </Fragment>
    </Router>

  );

}

export default App;
