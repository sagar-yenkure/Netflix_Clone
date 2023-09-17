import React from "react";
import { VscAdd } from "react-icons/vsc";

const Questions = () => {
  // const projects = [
  //   {
  //     id: 3,
  //     image:newslink,
  //     demoLink: "https://news-link.netlify.app",
  //     codeLink: "https://github.com/sagar-yenkure/NewsLink",
  //     desc:"A catagorie news app created with react,tailwind css and NewsAPI.  ",
  //   },
  //   {
  //     id: 4,
  //     image: tweet,
  //     demoLink: "https://tweeter-signup-clone.netlify.app",
  //     codeLink: "https://github.com/sagar-yenkure/twitter_login_page",
  //     desc:"just a tweeter(now known as X) signup page with tailwind css and vite ",
  //   },
  //   {
  //     id: 5,
  //     image:fb,
  //     demoLink: "https://fb-signup1page.netlify.app",
  //     codeLink: "https://github.com/sagar-yenkure/fb_login_page",
  //     desc:"just a facebook login page with tailwind css and vite.",
  //   },

  //   {
  //     id: 6,
  //     image:microsoft,
  //     demoLink: "https://microsoft1homepage.netlify.app",
  //     codeLink: "https://github.com/sagar-yenkure/microsoft_home_clone",
  //     desc:"A microsoft home page clone with tailwind css and vite.",
  //   },
  //   {
  //     id: 7,
  //     image:port,
  //     demoLink: "https://sagarportfollio.netlify.app",
  //     codeLink: "https://github.com/sagar-yenkure/microsoft_home_clone",
  //     desc:"A Portfolio website created with React, tailwind css",
  //   }
  // ];

  return (
    <>
      <div className="container bg-black w-full items-center ">
        <div className="text flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold text-center p-10">
            Frequently Asked Questions
          </h1>

          <div className="que____  my-1 flex bg-gray-600 ">
            <div className="bg-gray-600 text-white p-4 font-bold">
              {" "}
              What is Netflix
            </div>
            <div className="icon___ mt-4">
              <button>
                <VscAdd size={30} />
              </button>
            </div>
          </div>
          <div className="ans__  bg-gray-600 text-black p-4 font-bold flex flex-wrap ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aut facilis, pariatur corporis ducimus laboriosam animi voluptas assumenda libero sed omnis similique. Quis.
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
