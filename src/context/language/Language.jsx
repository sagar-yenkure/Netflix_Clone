import React from 'react'
import { useState } from 'react'
import LangContext from './Context';

const language = (props) => {
    const [language, setlanguage] = useState();

  return (
    <LangContext.Provider value={{ language , setlanguage}}>
    {props.children}
    </LangContext.Provider> 
  )
}

export default language