import React, { useContext, useEffect } from 'react'
import Corosole from './Corosole'
import Banner from './Banner'
import Moviecontext from '../context/Movie/context'
const Movies = () => {
  const context = useContext(Moviecontext)
    const {moviedata , moviefetch , topmovie,trendingmovie,horrormovie,upmovies }=context

useEffect(() => {
  moviefetch()
},[])



  return (
    <>
   <div className='bg-black'>

    <Banner/>
    <Corosole Cid={1}  heading={"Trending Movies"} Moviesset={moviedata}/>
    <Corosole Cid={2}  heading={"Top Rated"} Moviesset={topmovie}/>
    <Corosole Cid={3}  heading={"Trending Movies"} Moviesset={trendingmovie}/>
    <Corosole Cid={4}  heading={"Drama"} Moviesset={horrormovie}/>
    <Corosole Cid={5}  heading={"Top Series"} Moviesset={upmovies}/>
    

   </div>
    
    </>
  )
}

export default Movies