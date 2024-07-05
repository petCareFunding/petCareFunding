import './App.css';
import React from 'react';
import Main from './MainPage/Main';
import Login_Page from './login/Login_Page';
import { Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path="/login" element={<Login_Page />} />
      </Routes>
    </div>
  );
}

export default App;
