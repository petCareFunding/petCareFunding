import './App.css';
import React from 'react';
import PetItemspage from './PetProductsPage/PetItemsPage/PetItemspage';
import MyPage from './Mypage/Mypage';
import Header from './Mypage/Header/Header';
import { Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <MyPage/>
    </div>
  );
}

export default App;
