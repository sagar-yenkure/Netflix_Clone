import {combineReducers } from "@reduxjs/toolkit";
import likedmovie_reducer from "./slices/Likedmovies"


export default combineReducers({
    likedmovie_reducer,
})