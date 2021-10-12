import { HomeActions } from "../../common/enums/actions/home";

const INITIAL_STATE = {
  popularMovieList: [],
  topRatedMovieList: [],
  upcomingMovieList: [],
};

export const homeReducer = (state = INITIAL_STATE, action: any) => {
  const { type } = action;
  switch (type) {
    case HomeActions.SetPopularMovieList:
      const { popularMovieList } = action;
      return { ...state, popularMovieList };
    case HomeActions.SetTopRatedMovieList:
      const { topRatedMovieList } = action;
      return { ...state, topRatedMovieList };
    case HomeActions.SetUpcomingMovieList:
      const { upcomingMovieList } = action;
      return { ...state, upcomingMovieList };

    default:
      return state;
  }
};
