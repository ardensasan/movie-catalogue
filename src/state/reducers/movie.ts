import { MovieActions } from "../../common/enums/actions/movie";

const INITIAL_STATE = {
  movieDetails: undefined,
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
