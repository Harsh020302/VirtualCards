import React from 'react';
import { Route , Routes } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Toolsbar from './ToolsBar/Toolsbar';
import CardsLayout from './CardsLayout/CardsLayout';

import './App.css';

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
      <CardsLayout/>
    </div>
  );
}

export default App;
