import React from 'react'
import Corosole from './Corosole'
import Banner from './Banner'
import requests from './Requests'
const Movies = () => {
  return (
    <>
   
    <Banner/>
    <Corosole heading={"Upcoming"} URL={requests.Upcoming}/>
    <Corosole heading={"New Released"} URL={requests.Popular}/>
    {/* <Corosole heading={"Top Treanding"} URL={requests.Top}/> */}
    {/* <Corosole heading={"Trending"} URL={requests.Trending}/> */}

    
    </>
  )
}

export default Movies