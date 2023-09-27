import React from 'react'
import { useState } from 'react'
import Moviecontext from './context'
import requests from '../../comp/Requests';
import axios from 'axios';

const Movie = (props) => {
    
    const [moviedata, setmoviedata] = useState([]);
    // const [poster, setposter] = useState([]);
    const poster = moviedata[Math.floor(Math.random()*moviedata.length)]
    
  
    const moviefetch = async () => {
      axios.get(requests.Popular).then((response)=>{
        setmoviedata(response.data.results)
        
      })
    };

    
  return (
    <Moviecontext.Provider value={{ moviedata , setmoviedata , moviefetch , poster}}>
    {props.children}
    </Moviecontext.Provider> 
  )
}

export default Movie