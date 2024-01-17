import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Header from "./Header";
import Moviecontext from "../context/Movie/context";
import { CiBookmark } from "react-icons/ci";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { FaCheck } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addliked } from "@/redux/slices/Likedmovies";

const Banner = () => {
  const Dispatch = useDispatch();
  const { toast } = useToast();
  const context = useContext(Moviecontext);
  const { moviefetch, setposter, poster, defaultPoster } = context;
  const [isliked, setisliked] = useState(false);

  useEffect(() => {
    moviefetch();
    setposter(defaultPoster);
  }, []);

  useEffect(() => {
    setisliked(false);
  }, [poster]);

  return (
    <>
      <Header />

      <div className="w-full h-[550px]  text-white  from-black">
        <div className="w-full absolute  h-[550px] ">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${poster?.backdrop_path}`}
            alt={poster?.title}
          />
          <div className=" text-left absolute w-full flex top-[5%] p-4 lg:p-8 space-x-5">
            <div>
              <img
                className="w-[25rem] md:h-[26rem] rounded-md "
                src={`https://image.tmdb.org/t/p/original/${poster?.poster_path}`}
                alt={poster?.title}
              />
            </div>

            <div className=" mt-10">
              <h1 className=" text-3xl lg:text-5xl my-3 font-bold">
                {poster?.title}
              </h1>
              <div className=" flex space-x-3">
                <button className=" rounded-lg py-2 font-bold px-5 bg-gray-300 text-black">
                  Play
                </button>
                <button className=" py-2 rounded-lg px-5 bg-black text-white">
                  Watch Trailer
                </button>

                <span
                  title="Add to favourite"
                  className=" bg-black rounded-full w-12 h-12 flex justify-center items-center"
                >
                  <button
                    variant="outline"
                    onClick={() => {
                      setisliked(!isliked);
                      if (!isliked) {
                        toast({
                          description: `${poster?.title} added to mylist`,
                        });
                        Dispatch(addliked(poster));
                      }
                    }}
                  >
                    {!isliked ? (
                      <IoMdHeartEmpty size={20} />
                    ) : (
                      <FaCheck size={20} />
                    )}
                  </button>
                </span>
                <span
                  title="Add to Bookmark"
                  className="bg-black rounded-full w-12 h-12 flex justify-center items-center"
                >
                  <button>
                    <CiBookmark size={20} />
                  </button>
                </span>
              </div>

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
        <Toaster />
      </div>
    </>
  );
};

export default Banner;
