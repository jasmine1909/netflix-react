const API_KEY = "b6b3dabd6932469d875d2dfcd455f9b0";

// https://www.themoviedb.org/documentation/api/discover
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US,`,
//   fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// };
// export default requests;
// https://www.themoviedb.org/discover/movie?api_key=b6b3dabd6932469d875d2dfcd455f9b0&with_genres=28
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=109749`,
//   fetchDocumentMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=99`,
//   fetchCoolMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
// };

// export default requests;
// https://www.themoviedb.org/discover/movie?api_key=b6b3dabd6932469d875d2dfcd455f9b0&with_genres=18
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};
export default requests;
