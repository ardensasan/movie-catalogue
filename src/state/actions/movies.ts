import { MoviesSaga } from "../../common/enums/sagas/movies";

export const setMovieList = (page:string) => {
  return {
    type: MoviesSaga.SetMovieListSaga,
    page
  };
};
