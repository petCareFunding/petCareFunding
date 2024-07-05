import './App.css';
import React from 'react';
import PetItemspage from './PetProductsPage/PetItemsPage/PetItemspage';
import { Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PetItemspage/>
    </div>
  );
}

export default App;
