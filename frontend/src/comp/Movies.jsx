import React, { useContext, useEffect } from "react";
import Corosole from "./Corosole";
import Banner from "./Banner";
import Moviecontext from "../context/Movie/context";
import Footer from "./Home/Footer";
import { Link ,useNavigate} from "react-router-dom";
const Movies = () => {
  const navigate=useNavigate()
  const context = useContext(Moviecontext);
  const {
    moviedata,
    moviefetch,
    topmovie,
    trendingmovie,
    horrormovie,
    upmovies,
  } = context;

  useEffect(() => {
    if(!localStorage.getItem("accesstoken")){
      navigate("/login")
    }
    moviefetch();
  }, []);

  return (
    <>
      <div className="bg-black ">
        <Banner />
        <Corosole Cid={1} heading={"Trending Movies"} Moviesset={moviedata} />
        <Corosole Cid={2} heading={"Top Rated"} Moviesset={topmovie} />
        <Corosole
          Cid={3}
          heading={"Trending Movies"}
          Moviesset={trendingmovie}
        />
        <Corosole Cid={4} heading={"Drama"} Moviesset={horrormovie} />
        <Corosole Cid={5} heading={"Top Series"} Moviesset={upmovies} />
        <Corosole Cid={6} Moviesset={trendingmovie} blur={"blur-lg"} />
        <div className="w-full h-full text-white flex flex-col justify-center items-center p-10 space-y-8">
          <h1 className="font-bold text-4xl">There’s even more to watch.</h1>
          <p className="px-[20%] text-2xl text-center">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals and more. Watch as
            much as you want, anytime you want.
          </p>
          <button className="bg-[#e50914] text-xl px-12  sign__up text-white font-semibold py-[12px]">
            <Link to="/Signup">Join Now</Link>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Movies;
