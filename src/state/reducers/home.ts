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
      const { movieList } = action;
      return { ...state, popularMovieList: movieList };
    default:
        return state;
  }
};
