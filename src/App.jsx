import React from "react";
import LangContext from "./context/language/Language";
import Moviecontext from "./context/Movie/Movie";

import { Landing } from "./comp/Landing";
import Movies from "./comp/Movies";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <LangContext>
    <Moviecontext>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/Movies" element={<Movies />}></Route>
      </Routes>
    </Moviecontext>
    </LangContext>
  );
}

export default App;
