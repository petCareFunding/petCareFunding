import React from "react";
import PetHeader from "../Header/PetHeader";
import "./PetItemspage.css";
import PetItems from "../PetItems/Items";
import Footer from '../Footer/Footer';
import  mockup from '../mockup'

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
