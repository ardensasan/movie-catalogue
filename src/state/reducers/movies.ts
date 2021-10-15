import { MoviesActions } from "../../common/enums/actions/movies";
import { MoviesReducer } from "./types";
const INITIAL_STATE:MoviesReducer = {
  movieList: [],
  page: 1,
  totalPage: 1,
  error:undefined
};
const moviesReducer = (state = INITIAL_STATE, action: any) => {
  const { type, ...rest } = action;
  switch (type) {
    case MoviesActions.SetMovieList:
      return { ...state, ...rest };
    case MoviesActions.SetMovieListFailed:
      return { ...state, ...rest };
    default:
      return state;
  }
};

export default moviesReducer;
