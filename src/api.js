const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const fetchPopularMovies = (page = 1) =>
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  
  export const fetchTopRatedMovies = (page = 1) =>
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
  
  export const fetchUpcomingMovies = (page = 1) =>
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
  
  export const fetchMovieDetails = (movieId) =>
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  
  export const fetchMovieCast = (movieId) =>
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  
  export const searchMovies = (query, page = 1) =>
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;
  
  export const getImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;