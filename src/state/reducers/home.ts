import { HomeActions } from "../../common/enums/actions/home";

const INITIAL_STATE = {
  popularMovieList: [],
  topRatedMovieList: [],
  upcomingMovieList: [],
};

const homeReducer = (state = INITIAL_STATE, action: any) => {
  const { type, ...rest } = action;
  switch (type) {
    case HomeActions.SetPopularMovieList:
      return { ...state, ...rest };
    case HomeActions.SetTopRatedMovieList:
      return { ...state, ...rest };
    case HomeActions.SetUpcomingMovieList:
      return { ...state, ...rest };
    case HomeActions.SetMovieListFailed:
      return { ...state, ...rest };
    default:
      return state;
  }
};

export default homeReducer;
