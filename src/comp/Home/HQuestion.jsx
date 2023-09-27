import React from "react";
import { useState } from "react";
import Accordion from "./Accordion";
import LangContext from "../../context/language/Context";
import { useContext } from "react";

const HQuestion = () => {
    const context=useContext(LangContext)
    const { language } = context;
  const [haccordions, sethaccordion] = useState([
    {
      key: 1,
      title: "Netflix क्या है?",
      data: `Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.
          आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!`,
      isOpen: false,
    },
    {
      key: 2,
      title: "Netflix की कीमत क्या है ?",
      data: `हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "मैं कहां देख सकता हूं?",
      data: `कहीं भी, कभी भी देखें अपने पर्सनल कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए, वेब पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें.
    
          आप iOS, Android या Windows 10 ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं..`,
      isOpen: false,
    },
    {
      key: 4,
      title: " मैं कैसे cancle कर सकता हूँ ?",
      data: `Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "मैं Netflix पर क्या देख सकता हूं ? ",
      data: `Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "क्या Netflix बच्चों के लिए अच्छा है ?",
      data: `आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं.
          बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = haccordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    sethaccordion(updatedAccordions);
  };

  return (
    <>
      {/* accordion section */}

      <div className="bg-black">
        <h1 className="text-5xl text-white font-bold text-center p-12">
          Frequently Asked Questions
        </h1>
        <div className="p-3 px-[12%]">
          {haccordions.map((accordion) => (
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
        <div className="membership__ flex justify-center flex-col md:flex-row p-6">
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
            <button className="rounded-md hover:bg-red-500 bg-red-600  text-white font-semibold w-[10rem] h-[58px]">
              {!language ? "Get Started" : "शुरू करे"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HQuestion;
