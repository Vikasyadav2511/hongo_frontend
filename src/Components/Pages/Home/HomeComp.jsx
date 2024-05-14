import React from "react";
import CarouselComp from "./CarouselComp";
import CollectionComp from "./CollectionComp";
import Section3Comp from "./Section3Comp";
import Section4 from "./Section4";
import DecorComp from "./DecorComp";
import FooterComp from "../../footer/FooterComp";
import FeaturedComp from "./FeaturedComp";

const HomeComp = () => {
  return (
    <>
      <CarouselComp />
      <CollectionComp/> 
      <Section3Comp/>
      <FeaturedComp/>
      <Section4/>
      <DecorComp/>
      <FooterComp/>
    </>
  );
};

export default HomeComp;
