import { MovieActions } from "../../common/enums/actions/movie";
import { MovieSaga } from "../../common/enums/sagas/movie";

export const setMovieDetails = (movieID: string) => {
  return {
    type: MovieSaga.SetMovieDetailsSaga,
    movieID,
  };
};

export const resetMovieDetails = () =>{
  return {
    type: MovieActions.SetMovieDetails,
    movieDetails: undefined
  }
}
