import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import {MdOutlineFavoriteBorder , MdOutlineFavorite } from "react-icons/md";

const Movieitem = (props) => {
  const [like, setlike] = useState(true)
  const { img, title, id, release_date, original_name, first_air_date } = props;

  const handlelike=()=>{
    if(like===true){
      setlike(false)
      toast('Added to favourite.');
    }
    else if (like===false){
      setlike(true)
      toast('Removed from favourite.');
    }

  }
  return (
    <>
      <div
        key={id}
        className="relative hover:cursor-pointer scale-100 hover:scale-120"
      >
        <div className="w-[10rem] lg:w-[20rem] ">
          <img
            className=" w-full h-auto  "
            src={`https://image.tmdb.org/t/p/w500/${img}`}
            alt=""
          />
        /
        </div>
      
        <div className=" headings flex flex-col justify-center items-center absolute top-[0]  left-0 transition-all ease-in h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 ">
          <h1 className="  text-white text-center text-3xl font-semibold ">
            {!title ? original_name : title}
          </h1>
          <p className=" text-white text-sm font-semibold ">
            {!release_date ? first_air_date : release_date}
          </p>
          <p className="absolute top-3 left-3 text-gray-50 ">
            <button onClick={handlelike}>

            {like?<MdOutlineFavoriteBorder size={25}/>:< MdOutlineFavorite size={25} />}
            <Toaster />
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Movieitem;
