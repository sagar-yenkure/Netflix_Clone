import React from "react";
import { useState } from "react";
import Accordion from "./Accordion";
import LangContext from "../../context/language/Context";
import { useContext } from "react";


const Questions = () => {
  const context=useContext(LangContext)
  const { language } = context;
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is Netflix?",
      data: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected device You can watch as much as you want,
       whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "How much does Netflix costs ?",
      data: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "where i can Watch",
      data: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles , You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "How do i cancle ?",
      data: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "What i can Watch on Netflix ",
      data: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles , You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "Is Netflix good for kids ?",
      data: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space , Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
      isOpen: false,
    },
  ]);


  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <>
    {/* accordion section */}

      <div className="bg-black">
        <h1 className="text-5xl text-white font-bold text-center p-12">
          Frequently Asked Questions
        </h1>
        <div className="p-3 px-[12%]">
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
      </div>

{/* below accordion section */}

      <div className="below__accordion border-b-8  border-[#2d2d2d] bg-black">
        <p className=" text-xl md:text-2xl text-white text-center md:px-3 md:p-4 ">
          {!language
            ? "Ready to watchEnter your email to create or restart your membership"
            : "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."}
        </p>
        <div className="membership__ flex justify-center flex-col md:flex-row p-6 ">
          <form>
            <div className="p-3 flex flex-col md:flex-row ">
              <input
                className=" p-5 bg-gray rounded-lg  bg-[#1c2432] text-black md:w-[25rem] h-fit"
                type="email"
                name="email"
                id="email"
                placeholder={!language ? "Email address" : "ईमेल एड्रेस"}
                required
              />
            </div>
          </form>
          <div className="flex justify-center md:mt-4">
            <button className="rounded-md hover:bg-red-500 bg-[#e50914]  text-white font-semibold w-[10rem] h-[58px]">
              {!language ? "Get Started" : "शुरू करे"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
