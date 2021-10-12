import axios from "axios";
const API_KEY = "6fdc960c4cb19000df3556ff8e8b5831";
const MOVIES_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.desc&page=`;
export const fetchMovieList = async (page: any) => {
  return await axios.get(`${MOVIES_ENDPOINT}${page}`);
};
