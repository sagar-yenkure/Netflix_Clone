let key = import.meta.env.VITE_APIKEY;
const requests = {
  Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`,
  Top: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=1`,

  Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=2`,
  Horror:`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
  Series: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
};
// api.themoviedb.org/3/person/popular?language=en-US&page=1
// 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1
export default requests;
