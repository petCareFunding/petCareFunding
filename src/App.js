import './App.css';
import React from 'react';
import ItemsPage from "./PetProductsPage/PetItemsPage/ItemsPage";
import ItemDetail from "./PetProductsPage/ItemDetailPage/ItemDetail";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './MainPage/Main';
import Login_Page from './login/Login_Page';
import Join_Page from './join_members/Join_Page';
import SchoolMain from './School/SchoolMain.js';
import SchoolPost from './School/SchoolPost.js';
import EditInfo from './Mypage/EditInfo.js';
import Mypage from './Mypage/Mypage.js';
import MypageHeader from './Mypage/Header/Header.js';
import FuneralContainer from './FuneralService/FuneralContainer';
import ReservationContainer from './FReservationService/ReservationContainer';
import OrderItem from './PetProductsPage/PayMentPage/OrderItem/OrderItem.js';
import Funding_payment_details from './Funding_payment_details/Funding_payment_details.js';
import Funding_payment_detailsHeader from './Funding_payment_details/Header/Header.js';
import Wishlist from './Wishlist/Wishlist.js';
import Withdraw from './Withdraw/Withdraw.js';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login_Page />} />
          <Route path="/join_members" element={<Join_Page />} />
           <Route path="/ItemsPage" element={<ItemsPage />} />
          <Route path="/ItemsPage/:imageId" element={<ItemDetail />} />
          <Route path='/school' element={<SchoolMain/>}></Route>
          <Route path='/school/postSchoolFunding' element={<SchoolPost/>}/>
          <Route path="/Mypage/editMyInfo" element={<EditInfo />} />
          <Route path='/Mypage' element={<Mypage />} />
          <Route path='/Mypage/Header' element={<MypageHeader />} />
          <Route  path="/Funeral" element={<FuneralContainer/>}></Route>
      <Route  path="/FReservation" element={<ReservationContainer/>}></Route>
      <Route path='/PayMentPage/:userid'  element={<OrderItem/>} />
      <Route path='/Funding_payment_details'  element={<Funding_payment_details/>} />
      <Route path='/Funding_payment_detailsHeader'  element={<Funding_payment_detailsHeader/>} />
      <Route path='/Wishlist'  element={<Wishlist/>} />
      <Route path='/Witdraw'  element={<Withdraw/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;