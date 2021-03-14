export const API_KEY = "446cd5eab6ec94aceaa47567e36400c3";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTheater: `discover/movie?api_key=${API_KEY}&primary_release_date.gte=2021-02-12&primary_release_date.lte=2021-03-12`,
  fetctList: `list/10?page=1&api_key=${API_KEY}`,
};

export const baseImgUrl = "https://image.tmdb.org/t/p/original";
