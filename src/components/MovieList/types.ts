export interface MoviesState {
  movies: Movies;
}

interface Movies {
  movieList: Array<any>;
  page: number;
  totalPage: number;
  error: Error | undefined;
}
