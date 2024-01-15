import React, { useContext, useState } from "react";
import Moviecontext from "../context/Movie/context";
import { useEffect } from "react";

const Movieitem = (props) => {
  const context = useContext(Moviecontext);
  const { showmovieinfo ,defaultPoster } = context;
  const { data } = props;
  const { backdrop_path, title, id, original_name } = data;

  useEffect(()=>{
    showmovieinfo(defaultPoster)
  },[])
  return (
    <>
      <button
        onClick={() => {
          showmovieinfo(data);
          // console.log(data)
          
        }}
      >
        <div key={id} className=" hover:cursor-pointer h-fit w-fit rounded-lg">
          <div className="w-[21rem] md:h-[12rem] rounded-md">
            <img
              className=" w-full"
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt=""
            />
          </div>

          <div className=" headings flex flex-col justify-center items-center rounded-lg h-fit w-full ">
            <h1 className="  text-white  text-xl font-semibold">
              {!title ? original_name : title}
            </h1>
          </div>
        </div>
      </button>
    </>
  );
};

export default Movieitem;
