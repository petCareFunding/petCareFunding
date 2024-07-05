import './App.css';
import React from 'react';
import Main from './MainPage/Main';
import Login_Page from './login/Login_Page';
import { Routes, Route,Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login_Page />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
