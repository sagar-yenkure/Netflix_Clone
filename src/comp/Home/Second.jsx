import React from "react";
import mobile from "../../assets/mobile.jpg";
import loading from "../../assets/download-icon.gif";
import boxshot from "../../assets/boxshot.png";
import LangContext from "../../context/language/Context";
import { useContext } from "react";

const Second = () => {
  const context = useContext(LangContext);
  const { language } = context;
  return (
    <>
      <div className="conatiner bg-black border-b-8  border-[#2d2d2d] h-fit py-14 p-20">
        <div className="playbox flex flex-col relative md:flex-row justify-center mx-5 items-center">
          <div className="images__ w-fit relative ">
            <img className=" p-3 z-[1] relative sm:order-1 order-2 " src={mobile} alt="" />
            <div className="loading__part z-[2] w-[70%] md:w-[50%] left-[15%] md:left-[25%] bottom-[10%] border-2 rounded-xl bg-black border-gray-500 p-1 grid grid-cols-[80%_auto] absolute items-center">

            {/* small loading part  */}
              <div className="flex space-x-4  items-center">
                <img className="w-[4rem]" src={boxshot} alt="" />
                <div className="text-start mt-3">
                  <h1 className=" text-white font-bold">Stranger Things</h1>
                  <p className="text-blue-600">
                    {!language ? "Downloading..." : "डाउनलोड हो रहा है..."}
                  </p>
                </div>
              </div>
              <div>
                <img className="w-15 mt-2" src={loading} alt="" />
              </div>
            </div>
          </div>
          <div className="text text-white sm:order-2 order-1 text-center oer md:text-start md: ml-10  w-fit">
            <h1 className=" text-5xl font-bold my-4">
              {!language
                ? " Download your shows to watch offline"
                : "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें"}
            </h1>
            <p className="text-xl  w-[fit] ">
              {!language
                ? " Save your favourites easily and always have something to watch."
                : "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
