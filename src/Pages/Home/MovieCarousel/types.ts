export interface Props {
  type: string;
}

export interface HomeState {
  home: Home;
}

interface Home {
  popularMovieList: Array<any>;
  topRatedMovieList: Array<any>;
  upcomingMovieList: Array<any>;
  error: Error | undefined;
}
