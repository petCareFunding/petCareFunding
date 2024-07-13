import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ReservationHeader from "./ReservationHeader";
import ReservationMain from "./ReservationMain";

function ReservationContainer() {
    return (

  
      <div className="RContainer">


        <ReservationHeader/>
        {/* <ReservationMain/> */}
        
      </div>  

 
    );
  }
  export default ReservationContainer;