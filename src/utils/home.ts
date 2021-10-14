import axios from "axios";
const source = axios.CancelToken.source();
export const fetchMovieList = async (endpoint: string) => {
  return await axios.get(endpoint, {
    cancelToken: source.token,
  });
};