import axios from "axios";
const API_KEY = "6fdc960c4cb19000df3556ff8e8b5831";
const POPULAR_MOVIES_ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
const TOP_RATED_MOVIES_ENDPOINT = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
const UPCOMING_MOVIES_ENDPOINT = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`;

export const fetchPopularMovieList = async () => {
  return await axios.get(POPULAR_MOVIES_ENDPOINT);
};

export const fetchTopRatedMovieList = async () => {
  return await axios.get(TOP_RATED_MOVIES_ENDPOINT);
};

export const fetchUpcomingMovieList = async () => {
  return await axios.get(UPCOMING_MOVIES_ENDPOINT);
};

