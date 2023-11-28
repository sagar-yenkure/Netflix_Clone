import React, { useEffect } from "react";
import { useContext } from "react";
import Header from "./Header";
import Moviecontext from "../context/Movie/context";

const Banner = () => {
  const context = useContext(Moviecontext);
  const { moviefetch, moviedata, poster } = context;

useEffect(() => {
moviefetch()
}, [])

  return (
    <>
      <Header />

      <div className="w-full h-[550px]  text-white bg-gradient-to-r from-black">
        <div className="w-full absolute  h-[550px] ">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${poster?.backdrop_path}`}
            alt=""
          />
          <div className=" text-left absolute w-full top-[20%] p-4 lg:p-8 space-x-5">
            <h1 className=" text-3xl lg:text-5xl ml-2 p-3 font-bold">{poster?.title}</h1>
            <button className="border border-gray-200 py-2 px-5 bg-gray-300 text-black">Play</button>
            <button className="border border-gray-200 py-2 px-5 bg-black text-white">Watch Later</button>
            <p className=" pt-4 text-gray-500">released on {poster?.release_date}</p>
            <p className="pt-2 font-semibold pr-[10%] md:pr-[50%]">{poster?.overview.slice(0,250)}...</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
