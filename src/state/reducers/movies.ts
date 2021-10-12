import { MoviesActions } from "../../common/enums/actions/movies";
const INITIAL_STATE = {
  movieList: [],
};
const moviesReducer = (state = INITIAL_STATE, action: any) => {
  const { type } = action;
  switch (type) {
    case MoviesActions.SetMovieList:
      const { movieList } = action;
      return { ...state, movieList };
    default:
      return state;
  }
};

export default moviesReducer;
