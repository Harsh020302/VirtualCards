import React from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Toolsbar from './ToolsBar/Toolsbar';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Toolsbar/>
      <Routes>
        <Route exact path='/all'  />
        <Route exact path='/your'  />
        <Route exact path='/blocked'  />
      </Routes>
    </div>
  );
}

export default App;
