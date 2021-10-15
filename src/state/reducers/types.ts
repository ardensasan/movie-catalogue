export interface HomeReducer {
  popularMovieList: Array<any>;
  topRatedMovieList: Array<any>;
  upcomingMovieList: Array<any>;
  error: Error | undefined;
}

export interface MovieReducer {
  movieDetails: any;
  error: Error | undefined;
}
export interface MoviesReducer {
  movieList: Array<any>;
  page: number;
  totalPage: number;
  error: Error | undefined;
}

export interface SearchReducer {
  language: string | undefined;
  genreID: string | undefined;
  query: string | undefined;
  page: number;
  movieList: Array<any>;
  totalPages: number;
  error: Error | undefined;
}
