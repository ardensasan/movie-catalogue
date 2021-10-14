import axios from "axios";
const API_KEY = "6fdc960c4cb19000df3556ff8e8b5831";
export const fetchMovieList = async (page: any) => {
  return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`);
};
