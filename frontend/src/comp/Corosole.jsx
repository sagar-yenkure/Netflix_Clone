import React, { useState } from "react";
import Movieitem from "./Movieitem";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Corosole = (props) => {
  const { heading, Moviesset, Cid, blur } = props;

  const slidenext = () => {
    let slider = document.getElementById("slider" + Cid);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideprev = () => {
    let slider = document.getElementById("slider" + Cid);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <>
      <div className=" p-5 mt-5 ">
        <h1 className=" text-2xl text-white font-bold ">{heading}</h1>
      </div>
      <div className={`relative flex items-center group ${blur} `}>
        <MdKeyboardArrowLeft
          onClick={slideprev}
          className="bg-white rounded-full absolute z-10 opacity-50 hover:opacity-75 hidden hover:cursor-pointer group-hover:block "
          size={50}
        />

        <div
          id={"slider" + Cid}
          className=" scrollbar-hide w-full h-full gap-4 flex overflow-x-scroll  scroll-smooth "
        >
          {Moviesset.map((data) => {
            return (
              <Movieitem
                data={data}
                key={data.id}
                // img={data.backdrop_path}
                // first_air_date={data.first_air_date}
                // original_name={data.original_name}
                // title={data.title}
                // release_date={data.release_date}
                // vote={data.vote_count}
              />
            );
          })}
        </div>
        <MdKeyboardArrowRight
          onClick={slidenext}
          className="items-end hover:cursor-pointer bg-white rounded-full right-0 absolute z-10 opacity-50 hover:opacity-75 hidden group-hover:block "
          size={50}
        />
      </div>
    </>
  );
};

export default Corosole;
