import React from "react";
import Footer from "./Home/Footer";
import logo from "../assets/logo.png";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useNavigate } from "react-router-dom";
import { app } from "../Auth/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Signup = () => {
  const { toast } = useToast();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [info, setinfo] = useState({
    email: "",
    password: "",
  });
  const [show, setshow] = useState(true);
  const [cheack, setcheack] = useState(true);

  const onchange = (e) => {
    setinfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  //handle for login
  const handlesumbit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, info.email, info.password)
      .then((res) => {
        localStorage.setItem("accesstoken",res.user.accessToken)
        navigate("/Movies");
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          description: err.code,
        });
      });
  };

  const handleshow = () => {
    if (show) {
      setshow(false);
    } else if (!show) {
      setshow(true);
    }
  };
  const handlecheck = () => {
    if (cheack) {
      setcheack(false);
    } else if (!cheack) {
      setcheack(true);
    }
  };
  return (
    <>
      <main className=" relative home__screen bg-black lg:bg-home bg-fit bg-cover  w-full h-fit lg:h-screen ">
        <section className="bg-[rgba(0,0,0,0.7)]  pl-2 lg:pl-5">
          {/* netflix logo  */}
          <img className=" w-[6rem] lg:w-[12rem]  " src={logo} alt="logo" />
        </section>

        <section className="bg w-full h-full  flex flex-col items-center  bg-[rgba(0,0,0,0.7)] border-b border-gray-600 pb-[20%]">
          <div className=" boxxx w-full lg:w-[30%] h-[70%] lg:h-screen bg-black lg:bg-[rgba(0,0,0,0.7)]">
            <div className=" main box__ p-5 lg:p-[15%]">
              <h1 className=" text-white font-bold text-3xl">Sign In</h1>
              {/* text filed for Email */}
              <section className=" pt-[5%] w-full  py-4 flex flex-col lg:flex-row h-full  ">
                <input
                  className=" p-4 bg-gray rounded-md text bg-[#333333] text-white lg:w-full h-fit"
                  type="email"
                  name="email"
                  id="email"
                  value={info.email}
                  onChange={onchange}
                  placeholder="Email"
                  required
                />
              </section>
              {/* password input field */}
              <section className=" relative  py-1 flex flex-col lg:flex-row h-full ">
                <input
                  className="  p-4 bg-gray text-white rounded-md text bg-[#333333]  lg:w-full h-fit"
                  type={show ? "Password" : "text"}
                  name="password"
                  id="pass"
                  placeholder="Password"
                  value={info.password}
                  onChange={onchange}
                  required
                />

                {/* password show and hide button */}
                <button
                  onClick={handleshow}
                  className="text-gray-400 absolute right-0 p-3 "
                >
                  {show ? "Show" : "Hide"}
                </button>
              </section>

              {/* sign in button  */}
              <div
                onClick={handlesumbit}
                className=" bg-[#e50914] mt-[10%] text-center w-full rounded-md py-4 h-full  "
              >
                <button className="text-center text-white font-bold  ">
                  Sign In
                </button>
              </div>
              <div className="box text-gray-400 text-sm flex justify-between pt-3">
                <div className="cheaked__box">
                  <button onClick={handlecheck}>
                    {cheack ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}
                  </button>
                  Remember Me
                </div>
                <p className="needhelp__"></p>
                need Help ?
              </div>
              {/* new to netflix section  */}
              <div className="flex p-1 space-x-1">
                <p className="py-3 text-gray-400">New to Netflix?</p>
                <button
                  onClick={() => navigate("/Signup")}
                  className="font-semibold text-white"
                >
                  Sign Up now
                </button>
              </div>
              <div className="text-sm">
                <p className="text-gray-400">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </p>
                <p className="text-[#0071eb]">Learn more.</p>
              </div>
            </div>
          </div>
          <Toaster />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
