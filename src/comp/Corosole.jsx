import React, { useState, useEffect} from "react";
import Movieitem from "./Movieitem";
import axios from "axios";
// import Moviecontext from "../context/Movie/context";


const Corosole = (props) => {
  const{heading, URL}=props
  // const context = useContext(Moviecontext)
  // const {moviefetch, moviedata}=context
  const [Movie, setMovie] = useState([])

 
  useEffect(() => {
    axios.get(URL).then((response)=>{
      setMovie(response.data.results)
    })
  }, [URL]);

  // console.log(Movie)

  return (
    <>
    <div className=" p-2 mt-5">
      <h1 className=" text-xl text-black font-bold ">{heading}</h1>
    </div>
      <div className="w-full flex gap-2">
        {Movie.map((data) => {
          return (
            <Movieitem
              key={data.id}
              img={data.backdrop_path
              }
              title={data.title}
              release_date={data.release_date}
            />
          );
        })}
      </div>
    </>
  );
};

export default Corosole;
