import './App.css';
import React from 'react';
import Main from './MainPage/Main';
import Login_Page from './login/Login_Page';
import Join_Page from './join_members/Join_Page';
import JoinComplete_Page from './JoinComplete_Page/JoinComplete_Page';
import { Routes, Route,Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <JoinComplete_Page/>
    </div>
  );
}

export default App;
