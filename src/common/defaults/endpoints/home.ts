const API_KEY = "6fdc960c4cb19000df3556ff8e8b5831";

export const HomeEndpoint = {
  PopularMoviesEndpoint: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`,
  TopRatedMoviesEndpoint: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`,
  UpcomingMoviesEndpoint: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`,
};
