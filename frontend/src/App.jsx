import { Suspense, lazy } from "react";
import LangContext from "./context/language/Language";
import Moviecontext from "./context/Movie/Movie";
import { Route, Routes } from "react-router-dom";

import Landing from "./comp/Landing";
import Loading from "./comp/Loading";
// import Movies from "./comp/Movies";
// import Login from "./comp/Login";
// import Signup from "./comp/Signup";

const Movies = lazy(() => import("./comp/Movies"));
const Login = lazy(() => import("./comp/Login"));
const Signup = lazy(() => import("./comp/Signup"));

function App() {
  return (
    <LangContext>
      <Moviecontext>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Signup" element={<Signup/>}></Route>
          <Route exact path="/Movies" element={<Movies/>}></Route>
        </Routes>
        </Suspense>
      </Moviecontext>
    </LangContext>
  );
}

export default App;
