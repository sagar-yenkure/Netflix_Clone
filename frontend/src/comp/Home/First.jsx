import React from "react";
import tv from "../../assets/tv.png";
import video from "../../assets/video1.mp4"
import LangContext from "../../context/language/Context";
import { useContext } from "react";

const First = () => {
  const context=useContext(LangContext)
  const { language } = context;
  return (
    <>
      <div className="conatiner text-center bg-black border-b-8  border-[#2d2d2d] h-fit py-12 p-20">
        <div className="playbox flex flex-col  md:flex-row justify-center mx-5 items-center">
          <div className="text text-white text-center md:text-start  px-10  w-fit">
            <h1 className=" text-5xl font-bold my-4 text-center md:text-start ">{!language?"Enjoy on your TV":"अपने टीवी पर आनंद लें"}</h1>
            <p className="text-xl w-[fit] text-center md:text-start ">
              {!language?" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,Blu-ray players and more.":"स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें."}
            </p>
          </div>
          <div  className="images__ w-fit relative">
            <video  autoPlay muted loop className=" z-[1] absolute w-[74%] bottom-[25%] left-[13%]  " src={video}></video>
            <img className=" relative z-[2]" src={tv} alt="" />
          </div>
        </div> 
      </div>
    </>
  );
};
export default First