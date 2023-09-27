import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

const Header = () => {
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
          <div className="progile__ pt-3 flex space-x-3">
            <div className="relative flex">
              <input
              onChange={onchange}
                className="flex border border-slate-300 bg-transparent px-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 h-auto rounded-none py-1.5 pl-8 text-sm transition-all dark:placeholder:text-slate-300 dark:focus:ring-offset-0 w-0 border-none"
                id="query"
                placeholder="Search..."
                type="text"
                value=""
              />
              <button
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent absolute top-1/2 h-auto -translate-y-1/2 rounded-full p-1 hover:bg-transparent dark:hover:bg-transparent left-[9px]"
                aria-label="Search"
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
                  className="text-slate-50 transition-opacity hover:opacity-75 active:scale-95 h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                </svg>
              </button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
