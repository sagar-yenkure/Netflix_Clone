import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/')


  }
  return (
    <>
      <div className="header w-full h-fit bg-transparent px-[5%] z-[100] absolute">
        <div className="nav flex justify-between">
          <div className="logo flex">
            <img className="w-[8rem]" src={logo} alt="Netflix" />
            <div className="nav">
              <ul className=" hidden  p-6 lg:flex text-white space-x-4">
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
              </ul>
            </div>
          </div>
          <div className="progil  flex space-x-3 ">
            <div className="relative flex space-x-10">
            
              
            </div>
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
            <button>
              <img className="w-[2rem]" src={profile} alt="" />
            </button>
            <button onClick={logout} className="rounded-md px-1 sign__up text-red-600 font-semibold py-[1px]">
                    log out
                  </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
