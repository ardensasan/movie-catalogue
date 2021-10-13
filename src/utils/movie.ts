import axios from "axios";
const API_KEY = "6fdc960c4cb19000df3556ff8e8b5831";

const source = axios.CancelToken.source();
export const fetchMovieDetails = async (movieID: string) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&append_to_response=videos,images`,
    {
      cancelToken: source.token,
    }
  );
};