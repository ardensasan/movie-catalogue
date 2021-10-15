import { takeLatest, call, put,fork } from "@redux-saga/core/effects";
import { MovieActions } from "../../common/enums/actions/movie";
import { MovieSaga } from "../../common/enums/sagas/movie";
import { fetchMovieDetails } from "../../utils/movie";
//worker functions
function* getMovieDetails({ movieID }: any): any {
  try {
    const response = yield call(fetchMovieDetails, movieID);
    const { data: movieDetails } = response;
    yield put({ type: MovieActions.SetMovieDetails, movieDetails });
  } catch (error) {
    yield put({ type: MovieActions.SetMovieDetailsFailed, error });
  }
}

//watcher function
function* watchSetMovieDetailsSaga() {
  yield takeLatest(MovieSaga.SetMovieDetailsSaga, getMovieDetails);
}

export default function* movieRootSaga() {
  yield fork(watchSetMovieDetailsSaga);
}
