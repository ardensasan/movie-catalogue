import { takeLatest, call, put,fork } from "@redux-saga/core/effects";
import { MoviesActions } from "../../common/enums/actions/movies";
import { MoviesSaga } from "../../common/enums/sagas/movies";
import { fetchMovieList } from "../../utils/movies";
//worker functions
function* getMovieList({ page }: any): any {
  try {
    const response = yield call(fetchMovieList, page);
    const { results: movieList, total_results } = response.data;
    yield put({
      type: MoviesActions.SetMovieList,
      movieList,
      totalPage: Math.ceil(total_results / 20),
      page: parseInt(page),
    });
  } catch (error) {
    yield put({ type: MoviesActions.SetMovieListFailed, error });
  }
}

//watcher function
function* watchSetMovieListSaga() {
  yield takeLatest(MoviesSaga.SetMovieListSaga, getMovieList);
}

export default function* moviesRootSaga() {
  yield fork(watchSetMovieListSaga);
}
