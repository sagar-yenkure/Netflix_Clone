import React from "react";

const Movieitem = (props) => {
  const { img, title, id, release_date } = props;
  return (
    <>
      <div key={id} className="relative hover:cursor-pointer scale-100 hover:scale-120">
        <div className="w-[10rem] lg:w-[20rem] ">
          <img
            className=" w-full h-auto  "
            src={`https://image.tmdb.org/t/p/w500/${img}`}
            alt=""
          />
        </div>
        <div className=" headings flex flex-col justify-center items-center absolute top-[0]  left-0 transition-all ease-in h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 ">
          <h1 className="  text-white text-sm font-semibold ">{title}</h1>
          <p className=" text-white text-sm font-semibold ">{release_date}</p>
        </div>
      </div>
    </>
  );
};

export default Movieitem;
