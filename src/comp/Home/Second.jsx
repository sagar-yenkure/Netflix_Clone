import React from 'react'
import mobile from "../../assets/mobile.jpg"
import LangContext from "../../context/language/Context";
import { useContext } from "react";

const Second = () => {
    const context=useContext(LangContext)
    const { language } = context;
  return (
<>
<div className="conatiner bg-black border-b-8  border-gray-500 h-fit pt-10">
        <div className="playbox flex flex-col  md:flex-row justify-center mx-5 items-center">
          <div className="images__ w-fit ">
            <img className='p-4' src={mobile} alt="" />
          </div>
          <div className="text text-white text-center md:text-start md: ml-10  w-fit">
            <h1 className=" text-5xl font-bold my-4">{!language?" Download your shows to watch offline":"ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें"}</h1>
            <p className="text-xl w-[fit] ">
            {!language?" Save your favourites easily and always have something to watch.":"अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें."}
            </p>
          </div>
        </div>
      </div>
</>
   
   )
}

export default Second