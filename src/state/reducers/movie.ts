import { MovieActions } from "../../common/enums/actions/movie";

const INITIAL_STATE = {
  movieDetails: undefined,
};

const movieReducer = (state = INITIAL_STATE, action: any) => {
  const { type } = action;
  switch (type) {
    case MovieActions.SetMovieDetails:
      const { movieDetails } = action;
      return { ...state, movieDetails };
    default:
      return state;
  }
};

export default movieReducer;
