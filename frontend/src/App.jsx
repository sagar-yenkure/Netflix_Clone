import React from "react";
import LangContext from "./context/language/Language";
import Moviecontext from "./context/Movie/Movie"; 
// import {AuthContextProvider} from "./context/Auth"

import { Landing } from "./comp/Landing";
import Movies from "./comp/Movies";
import { Route, Routes } from "react-router-dom";
import Login from "./comp/Login";
import Signup from "./comp/Signup";

function App() {
  
  return (
    <LangContext>
    <Moviecontext>
      {/* <AuthContextProvider> */}

      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/Movies" element={<Movies />}></Route>
      </Routes>
      {/* </AuthContextProvider> */}
    </Moviecontext>
    </LangContext>
  );
}

export default App;
