import React from 'react';
import { Route , Routes } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Toolsbar from './Toolsbar/Toolsbar.jsx';
import CardsLayout from './CardsLayout/CardsLayout.jsx';

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
