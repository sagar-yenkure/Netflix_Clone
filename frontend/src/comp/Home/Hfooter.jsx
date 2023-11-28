import React, { useState } from "react";
import { LiaCaretDownSolid } from "react-icons/lia";
import LangContext from "../../context/language/Context";
import { useContext } from "react";

const Hfooter = () => {
  const [lang, setlang] = useState("English");
  const [hide, sethide] = useState("hidden");
  const context = useContext(LangContext);
  const { language, setlanguage } = context;

  const links = [
    {
      id: 1,
      link: "FAQ",
    },
    {
      id: 2,
      link: "सहायता केंद्र",
    },
    {
      id: 3,
      link: "अकाउंट",
    },
    {
      id: 4,
      link: "मीडिया केंद्र",
    },
    {
      id: 5,
      link: "इंवेस्टर संबंध",
    },
    {
      id: 6,
      link: "नौकरियां",
    },
    {
      id: 7,
      link: "देखने के तरीके",
    },
    {
      id: 8,
      link: "उपयोग की शर्तें",
    },
    {
      id: 9,
      link: "प्रायवेसी",
    },
    {
      id: 10,
      link: "कुकी प्रेफ़रेंस",
    },
    {
      id: 11,
      link: "कॉरपोरेट जानकारी",
    },
    {
      id: 12,
      link: "हमसे संपर्क करें",
    },
    {
      id: 13,
      link: "स्पीड टेस्ट",
    },
    {
      id: 14,
      link: "कानूनी सूचनाएं",
    },
    {
      id: 15,
      link: "सिर्फ़ Netflix पर",
    },
  ];
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
      <div className="footer w-full h-full py-[5rem] px-[12rem]  flex flex-col justify-between bg-black">
        {/* links section for foooter */}
        <div>
          <div className="flex space-x-1 py-3">
            <h1 className="text-gray-400 ">कोई सवाल है?</h1>
            <h1 className="text-gray-400 underline">000-800-919</h1>
            <h1 className="text-gray-400 ">पर कॉल करें</h1>
          </div>
          <div className="imp__links"></div>
          <div className="grid grid-cols-4 gap-2 text-gray-400">
            {links.map((link) => {
              return (
                <p key={link.id} className=" p-1 underline ">
                  {link.link}
                </p>
              );
            })}
          </div>
        </div>

        {/* language buttons and logic */}

        <div className="lang">
          <button //button for language .
            onClick={hidelang}
            className=" flex justify-center rounded-md mt-6 md:mt-8 border-2 border-white"
          >
            <div className="mx-4 my-1 text-white ">{lang}</div>
            <div>
              <LiaCaretDownSolid />
            </div>
          </button>
          <div
            className={`lang__menu flex ${hide} w-[6rem] flex-col rounded-lg border-2 border-white`}
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
            <h1 className="text-gray-400 mt-5">Netflix भारत</h1>
        </div>
      </div>
    </>
  );
};

export default Hfooter;
