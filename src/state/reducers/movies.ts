import { MoviesActions } from "../../common/enums/actions/movies";
const INITIAL_STATE = {
  movieList: [],
  page:1,
  totalPage:1
};
const moviesReducer = (state = INITIAL_STATE, action: any) => {
  const { type,...rest } = action;
  switch (type) {
    case MoviesActions.SetMovieList:
      return { ...state, ...rest };
    default:
      return state;
  }
};

export default moviesReducer;
