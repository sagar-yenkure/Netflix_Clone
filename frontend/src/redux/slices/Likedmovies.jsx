import { nanoid, createSlice } from "@reduxjs/toolkit";


const initialState = {
  movieslist: [],
};

export const likedmoviesslice = createSlice({
  name: "likedmoviesslice",
  initialState,

  reducers: {
    addliked: (state, action) => {
      const {
        backdrop_path,
        original_title,
        original_language,
        release_date,
        poster_path,
        id,
      } = action.payload;


      const movie = {
        id: id,
        background: backdrop_path,
        poster: poster_path,
        title: original_title,
        language: original_language,
        release: release_date,
      };
      
      state.movieslist.push(movie);
    },

    removeliked: (state, action) => {
    state.movieslist = state.movieslist.filter((movie) => action.payload!== movie.id);
    },
  },
});

export const { addliked, removeliked } = likedmoviesslice.actions;
export default likedmoviesslice.reducer;
