import "./App.css";
import React from "react";
import ItemsPage from "./PetProductsPage/PetItemspage/ItemsPage";
import ItemDetail from "./PetProductsPage/ItemDetailPage/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ItemsPage" element={<ItemsPage />} />
        <Route path="/ItemsPage/:imageId" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
