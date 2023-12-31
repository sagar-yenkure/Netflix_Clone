import React from "react";
import { useState } from "react";
import Moviecontext from "./context";
import requests from "../../comp/Requests";
import axios from "axios";

const Movie = (props) => {
  const [moviedata, setmoviedata] = useState([]);
  const [topmovie, settopmovie] = useState([]);
  const [trendingmovie, settrendingmovie] = useState([]);
  const [horrormovie, sethorrormovie] = useState([]);
  const [upmovies, setupmovies] = useState([]);

  const poster = moviedata[Math.floor(Math.random() * moviedata.length)];

  const moviefetch = async () => {
    await axios.get(requests.Popular).then((response) => {
      setmoviedata(response.data.results);
    });

    await axios.get(requests.Top).then((response) => {
      settopmovie(response.data.results);
    });

    await axios.get(requests.Trending).then((response) => {
      settrendingmovie(response.data.results);
    });

    await axios.get(requests.Horror).then((response) => {
      sethorrormovie(response.data.results);
    });

    await axios.get(requests.Series).then((response) => {
      setupmovies(response.data.results);
    });
  };

  return (
    <Moviecontext.Provider
      value={{ moviedata, setmoviedata, moviefetch, poster ,topmovie,trendingmovie,horrormovie,upmovies }}
    >
      {props.children}
    </Moviecontext.Provider>
  );
};

export default Movie;
