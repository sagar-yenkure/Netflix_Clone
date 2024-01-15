import React, { useEffect } from "react";
import { useContext } from "react";
import Header from "./Header";
import Moviecontext from "../context/Movie/context";
import { TbRating18Plus, TbRating12Plus } from "react-icons/tb";

const Banner = () => {
  const context = useContext(Moviecontext);
  const { moviefetch, setposter, poster, defaultPoster } = context;

  useEffect(() => {
    moviefetch();
    setposter(defaultPoster);
  }, []);

  return (
    <>
      <Header />

      <div className="w-full h-[550px]  text-white bg-transparent  from-black">
        <div className="w-full absolute  h-[550px] ">
          <img
            className="w-full h-full object-cover "
            src={`https://image.tmdb.org/t/p/original/${poster?.backdrop_path}`}
            alt={poster?.title}
          />
          <div className=" text-left absolute w-full flex top-[10%] p-4 lg:p-8 space-x-5">
            <div>
              <img
                className="w-[25rem] md:h-[26rem] rounded-md "
                src={`https://image.tmdb.org/t/p/original/${poster?.poster_path}`}
                alt={poster?.title}
              />
            </div>
            {/* //the overview of movie */}
            <div>
              <h1 className=" text-3xl lg:text-5xl my-3 font-bold">
                {poster?.title}
              </h1>
              <button className="border border-gray-200 py-2 px-5 bg-gray-300 text-black">
                Play
              </button>
              <button className="border border-gray-200 py-2 px-5 bg-black text-white">
                Watch Later
              </button>
          

            {/* the  overview of  movie */}
              <div className=" flex space-x-4 font-bold mt-5">
                <p className="  text-white">
                  {poster ? poster.release_date : ""} ‧{" "}
                </p>
                <span>({poster?.original_language}) ‧ </span>
                <span className=" ">{poster?.vote_average} ‧ </span>
                <span>War/Action ‧ 2h 38m</span>
              </div>
              <p className="pt-2 pr-[10%] md:pr-[50%]">
                <h1 className=" font-bold">Overview</h1>
                {poster?.overview}
              </p>
            </div>
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
