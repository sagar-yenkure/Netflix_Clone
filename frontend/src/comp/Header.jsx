import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { removeliked } from "@/redux/slices/Likedmovies";

const Header = () => {
  const dispatch = useDispatch();
  const likedmovies = useSelector(
    (state) => state.likedmovie_reducer.movieslist
  );

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="header w-full h-fit bg-transparent px-[5%]">
        <div className="nav flex justify-between">
          <div className="logo flex">
            <img className="w-[6rem]" src={logo} alt="Netflix" />
            <div className="nav">
              <ul className=" hidden  p-4 lg:flex text-white space-x-4">
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <Drawer>
                  <DrawerTrigger>My List</DrawerTrigger>
                  <DrawerContent>
                    {likedmovies.length == 0 ? (
                      <div className=" flex p-3 items-center justify-center">
                        <h1 className="">Nothing here in My List , </h1>
                        <span> Click on </span>
                        <span className=" px-2">
                          <IoMdHeartEmpty size={20} />
                        </span>
                        <span>to add movies.</span>
                      </div>
                    ) : (
                      <div className=" scrollbar-hide overflow-y-scroll overflow-x-hidden h-[40rem] p-14 w-full">
                        {likedmovies.map((movie) => {
                          return (
                            <main id={movie.id} className=" w-full my-5 overflow-hidden rounded-xl">
                              <div className=" w-full h-[5rem]">
                                <img
                                  className=" w-full h-fit"
                                  src={`https://image.tmdb.org/t/p/w500/${movie.background}`}
                                  alt=""
                                />
                              </div>
                              <div
                                className="w-full h-fit rounded-lg my-2 px-5
                            flex "
                              >
                                <img
                                  className="h-[15rem] rounded-lg"
                                  src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
                                  alt=""
                                />
                                <div className="flex flex-col ">
                                  <div className="p-2 flex space-x-4 w-full justify-center h-fit ">
                                    <h1 className=" font-bold text-3xl">
                                      {movie.title}
                                    </h1>
                                    <span className={`text-xl pt-1`}>
                                      [{movie.language}]
                                    </span>
                                  </div>
                                  <div className="p-2">
                                    <span className="text-2xl">
                                      Realease Date : {movie.release}
                                    </span>
                                  </div>
                                  <div className="px-2 flex space-x-3 mt-2">
                                    <button className=" rounded-lg py-2 font-bold px-5 bg-gray-300 text-black">
                                      Play
                                    </button>
                                    <button className=" py-2 rounded-lg px-5 bg-black text-white">
                                      Watch Trailer
                                    </button>
                                    <button
                                      onClick={() => {
                                        dispatch(removeliked(movie.id));
                                      }}
                                      className=" py-2 rounded-lg px-5 bg-red-600 text-white"
                                    >
                                      remove from MyList
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </main>
                          );
                        })}
                      </div>
                    )}
                    <DrawerFooter>
                      <DrawerClose>
                        <Button>Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </ul>
            </div>
          </div>
          <div className="progil  flex space-x-3 ">
            <div className="relative flex space-x-10"></div>
            <button
              className="items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none  active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent hidden h-auto rounded-full p-1 hover:bg-transparent dark:hover:bg-transparent lg:flex"
              aria-label="Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 cursor-pointer text-white transition-opacity hover:opacity-75 active:scale-95"
                aria-hidden="true"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <img className="w-[2rem]" src={profile} alt="" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={logout}
              className="rounded-md px-1 sign__up text-red-600 font-semibold py-[1px]"
            >
              log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
