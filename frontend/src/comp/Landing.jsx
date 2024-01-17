import React from "react";

import LangContext from "../context/language/Context";
import { useContext } from "react";
import Homescreen from "./Home/Homescreen";
import First from "./Home/First";
import Second from "./Home/Second";
import Third from "./Home/Third";
import Fourth from "./Home/Fourth";
import Questions from "./Home/Questions";
import Footer from "./Home/Footer";
import HQuestion from "./Home/HQuestion";
import Hfooter from "./Home/Hfooter";

export const Landing = () => {
  const context = useContext(LangContext);
  const { language } = context;
  return (
    <>
      <Homescreen />
  
      <First />
      <Second />
      <Third />
      <Fourth />
      {!language ? <Questions /> : <HQuestion />}
      {!language ? <Footer /> : <Hfooter />}
    </>
  );
};
