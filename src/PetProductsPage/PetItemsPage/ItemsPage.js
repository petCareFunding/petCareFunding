import React from "react";
import mockup from "../mockup"
import PetHeader from "../Header/PetHeader";
import "./PetItemspage.css";
import PetItems from "../PetItems/Items";
import Footer from '../Footer/Footer';

const PetItemspage = () => {
  return (
    <div>
      <PetHeader/>
      <PetItems images={mockup} />
      <Footer/>
    </div>
  );
};

export default PetItemspage;
