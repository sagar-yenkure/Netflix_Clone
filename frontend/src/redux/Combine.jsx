import { combineReducers } from "@reduxjs/toolkit";
import likedmovie_reducer from "./slices/Likedmovies";
import user_reducer from "./slices/user";

export default combineReducers({
  likedmovie_reducer,
  user_reducer,
});
