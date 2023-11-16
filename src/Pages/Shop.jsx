import React from "react";
import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollections";
import Offer from "../Components/Offers/Offer";
import Popular from "../Components/Popular/Popular";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
    </div>
  );
};

export default Shop;
