import { MovieSaga } from "../../common/enums/sagas/movie";

export const setMovieDetails = (movieID: string) => {
  return {
    type: MovieSaga.SetMovieDetailsSaga,
    movieID,
  };
};
