import { takeLatest, call, put } from "@redux-saga/core/effects";
import { MoviesActions } from "../../common/enums/actions/movies";
import { MoviesSaga } from "../../common/enums/sagas/movies";
import { fetchMovieList } from "../../utils/movies";
//worker functions
function* getMovieList({ page }: any): any {
  const response = yield call(fetchMovieList, page);
  const { results: movieList } = response.data;
  yield put({ type: MoviesActions.SetMovieList, movieList });
}

//watcher function
export function* watchSetMovieListSaga() {
  yield takeLatest(MoviesSaga.SetMovieListSaga, getMovieList);
}
