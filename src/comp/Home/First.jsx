import React from "react";
import tv from "../../assets/tv.png";
import LangContext from "../../context/language/Context";
import { useContext } from "react";

const First = () => {
  const context=useContext(LangContext)
  const { language } = context;
  return (
    <>
      <div className="conatiner bg-black border-b-8  border-gray-500 h-fit pt-10">
        <div className="playbox flex flex-col  md:flex-row justify-center mx-5 items-center">
          <div className="text text-white text-center md:text-start md: ml-10  w-fit">
            <h1 className=" text-5xl font-bold my-4">{!language?"Enjoy on your TV":"अपने टीवी पर आनंद लें"}</h1>
            <p className="text-xl w-[fit] ">
              {!language?" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,Blu-ray players and more.":"स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें."}
            </p>
          </div>
          <div className="images__ w-fit">
            <img src={tv} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default First