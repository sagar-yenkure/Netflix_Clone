import React from 'react'
import LangContext from "../../context/language/Context";
import { useContext } from "react";
import kidimg from "../../assets/kids.png"

const Fourth = () => {
  const context=useContext(LangContext)
  const { language } = context;

  return (
    <>
<div className="conatiner bg-black border-b-8  border-gray-500 h-fit pt-10">
        <div className="playbox flex flex-col  md:flex-row justify-center mx-5 items-center">
          <div className="images__ w-fit ">
            <img className='p-4' src={kidimg} alt="" />
          </div>
          <div className="text text-white text-center md:text-start md: ml-10  w-fit">
            <h1 className=" text-5xl font-bold my-4">{!language?"Create profiles for kids":"बच्चों के लिए प्रोफ़ाइल बनाएं"}</h1>
            <p className="text-xl w-[fit] ">
           {!language? "Send children on adventures with their favourite characters in a space made just for them—free with your membership.":"बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री."}
            </p>
          </div>
        </div>
      </div>
</>
   
  )
}

export default Fourth