import { MovieActions } from "../../common/enums/actions/movie";
import { MovieReducer } from "./types";

const INITIAL_STATE:MovieReducer = {
  movieDetails: undefined,
  error:undefined
};

const movieReducer = (state = INITIAL_STATE, action: any) => {
  const { type, ...rest } = action;
  switch (type) {
    case MovieActions.SetMovieDetails:
      return { ...state, ...rest };
    case MovieActions.SetMovieDetailsFailed:
      return { ...state, ...rest };
    default:
      return state;
  }
};

export default movieReducer;
