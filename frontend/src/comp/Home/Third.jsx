import React from "react";
import LangContext from "../../context/language/Context";
import { useContext } from "react";
import device from "../../assets/device.png";
import video2 from "../../assets/video2.mp4"

const Third = () => {
    const context=useContext(LangContext)
    const { language } = context;
  return (
    <>
      <div className="conatiner bg-black border-b-8  border-[#2d2d2d] h-fit pt-10 p-20">
        <div className="playbox flex flex-col  md:flex-row justify-center mx-5 items-center">
          <div className="text text-white text-center md:text-start md: ml-10  w-fit">
            <h1 className=" text-5xl font-bold my-4">{!language? "Watch everywhere":"हर जगह देखें"}</h1>
            <p className="text-xl w-[fit] ">
             {! language?" Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.":"बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें."}
            </p>
          </div>
          <div className=" relative images__ w-fit ">
          <video autoPlay muted loop className=" z-[1] absolute w-[59%] bottom-[44%] left-[20%] autoplay loop" src={video2}></video>
            <img className="p-4 z-[2] relative" src={device} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
