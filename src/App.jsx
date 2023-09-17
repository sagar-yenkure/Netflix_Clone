import React from 'react'
import LangContext from "./context/language/Language"
import { Landing } from './comp/Landing'


function App() {

  return (
  <LangContext>
    
    <Landing/>

  </LangContext>


  )
}

export default App
