import "./App.css";
import React from "react";
import Main from './MainPage/Main';
import Login_Page from './login/Login_Page';
import Join_Page from './join_members/Join_Page';
import ItemsPage from "./PetProductsPage/PetItemspage/ItemsPage";
import ItemDetail from "./PetProductsPage/ItemDetailPage/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login_Page />} />
          <Route path="/join_members" element={<Join_Page />} />
        <Route path="/ItemsPage" element={<ItemsPage />} />
        <Route path="/ItemsPage/:imageId" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
