let key = import.meta.env.VITE_APIKEY;
const requests = {
  Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`,
  Top: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=2`,
  Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=2`,
  Horror: `https://api.themoviedb.org/3/movie/popular?api_key=${key}$query=horror`,
  Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=1`,
};
export default requests;
