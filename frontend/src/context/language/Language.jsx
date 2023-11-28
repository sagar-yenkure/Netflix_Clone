import React from "react";
import { useState } from "react";
import LangContext from "./Context";
import { FlashAuto } from "@mui/icons-material";

const language = (props) => {
  const [language, setlanguage] = useState()

  const loginuser = () => {};

  return (
    <LangContext.Provider value={{ language, setlanguage}}>
      {props.children}
    </LangContext.Provider>
  );
};

export default language;
