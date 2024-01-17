import React from "react";
import { LiaCaretDownSolid } from "react-icons/lia";
import { useState, useContext } from "react";
import LangContext from "../../context/language/Context";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Homescreen = () => {
  const context = useContext(LangContext);
  const User =true
  const { language, setlanguage } = context;
  const [lang, setlang] = useState("English");
  const [hide, sethide] = useState("hidden");

  //function to change the language to English
  const handleeng = () => {
    setlang("English");
    setlanguage(false);
  };

  //function to change the language to Hindi
  const handlehi = () => {
    setlang("हिन्दी");
    setlanguage(true);
  };

  //function to hide the english and hindi sub meun in language section.
  const hidelang = () => {
    if (hide == "visible") {
      sethide("hidden");
    } else {
      sethide("visible");
    }
  };

  return (
    <>
      {/* the main scrren of introduction page */}

      <div
        className={
          !language
            ? "home__screen bg-home bg-cover bg-center  w-full h-screen  bg-slate-400 border-b-8 border-[#2d2d2d]"
            : "home__screen bg-hindihome bg-cover bg-center  w-full h-screen border-b-8 border-gray-500"
        }
      >
        <div className="blurbg__ w-full h-full justify-between flex flex-col items-center bg-[rgba(0,0,0,0.7)]">
          {/* navbar starting  */}
          <div className="header__Navbar flex justify-center w-full">
            <div className="nav flex justify-around w-full">
              <div className="logo">
                <img
                  className=" w-[8rem] md:w-[12rem] "
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="right__section flex space-x-5 text-white">
                <div className="lang">
                  <button //button for language .
                    onClick={hidelang}
                    className=" flex justify-center rounded-lg mt-6 md:mt-8 border-2 border-white"
                  >
                    <div className="mx-4 my-1 ">{lang}</div>
                    <div>
                      <LiaCaretDownSolid />
                    </div>
                  </button>
                  <div
                    className={`lang__menu flex ${hide} flex-col rounded-lg border-2 border-white`}
                  >
                    <button
                      onClick={handleeng}
                      className="bg-white text-black hover:bg-blue-500 hover:text-white"
                    >
                      English
                    </button>
                    <button
                      onClick={handlehi}
                      className="bg-white text-black hover:bg-blue-500 hover:text-white"
                    >
                      हिन्दी
                    </button>
                  </div>
                </div>
                <div className="mt-6 md:mt-8 ">
                  <button className="rounded-md bg-red-600  px-4 sign__up text-white font-semibold py-[5px]">
                    <Link to="/Signup">
                    {!language ? "sign In" : "साइन इन करें"}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* homescreeen offer section */}

          <div className="text__offer w-fit mb-20 md:mb-40 h-[full] ">
            <h1 className=" text-3xl md:text-5xl font-extrabold px-4 md:m-3 text-white">
              {!language
                ? "Enjoy big movies, hit series and more from ₹ 149."
                : "बड़ी फ़िल्में, हिट सीरीज़ और बहुत कुछ का आनंद लें बस ₹149 में."}
            </h1>
            <p className=" text-2xl text-white text-center mt-3">
              {!language
                ? "Join today. Cancel anytime."
                : "आज शामिल हों, जब चाहें कैंसल करें."}
            </p>
            <p className=" text-xl md:text-2xl text-white text-center mt-1 m-6 md:px-3 md:p-4 ">
              {!language
                ? "Ready to watchEnter your email to create or restart your membership"
                : "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."}
            </p>
            <div className="membership__ flex justify-center flex-col md:flex-row ">
              <form>
                <div className="p-4 flex flex-col md:flex-row ">
                  <input
                    className=" p-4 bg-gray rounded-lg text text-black md:w-[25rem] h-fit"
                    type="email"
                    name="email"
                    id="email"
                    placeholder={!language ? "Email address" : "ईमेल एड्रेस"}
                    required
                  />
                </div>
              </form>
              <div className="flex justify-center md:mt-4">
                <button className="rounded-md hover:bg-red-500 bg-red-600  text-white font-semibold w-[10rem] h-[58px]">
                {!User?<Link to="/login">{!language ? "Get Started" : "शुरू करे"}</Link>:
                  <Link to="/movies">{!language ? "Get Started" : "शुरू करे"}</Link>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homescreen;
