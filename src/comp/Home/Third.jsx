import React from "react";
import LangContext from "../../context/language/Context";
import { useContext } from "react";
import device from "../../assets/device.png";

const Third = () => {
    const context=useContext(LangContext)
    const { language } = context;
  return (
    <>
      <div className="conatiner bg-black border-b-8  border-gray-500 h-fit pt-10">
        <div className="playbox flex flex-col  md:flex-row justify-center mx-5 items-center">
          <div className="text text-white text-center md:text-start md: ml-10  w-fit">
            <h1 className=" text-5xl font-bold my-4">{!language? "Watch everywhere":"हर जगह देखें"}</h1>
            <p className="text-xl w-[fit] ">
             {! language?" Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.":"बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें."}
            </p>
          </div>
          <div className="images__ w-fit ">
            <img className="p-4" src={device} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
