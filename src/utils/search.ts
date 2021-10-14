import axios from "axios";
const source = axios.CancelToken.source();
export const fetchSearchByLanguageMovieList = async (
  language: string,
  page: string
) => {
  return await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=6fdc960c4cb19000df3556ff8e8b5831&with_original_language=${language}&page=${page}`,
    {
      cancelToken: source.token,
    }
  );
};

export const fetchSearchByGenreMovieList = async (
  genreID: string,
  page: string
) => {
  return await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=6fdc960c4cb19000df3556ff8e8b5831&with_genres=${genreID}&page=${page}`,
    {
      cancelToken: source.token,
    }
  );
};

export const fetchSearchByQueryMovieList = async (
  query: string,
  page: string
) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=6fdc960c4cb19000df3556ff8e8b5831&query=${query}&page=${page}`,
    {
      cancelToken: source.token,
    }
  );
};
