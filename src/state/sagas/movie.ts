import { takeLatest, call, put } from "redux-saga/effects";
import { MovieActions } from "../../common/enums/actions/movie";
import { MovieSaga } from "../../common/enums/sagas/movie";
import { fetchMovieDetails } from "../../utils/movie";
//worker functions
function* getMovieDetails({ movieID }: any): any {
  const response = yield call(fetchMovieDetails, movieID);
  const {data:movieDetails} = response;
  yield put({ type: MovieActions.SetMovieDetails, movieDetails });
}

//watcher function
export function* watchSetMovieDetailsSaga() {
  yield takeLatest(MovieSaga.SetMovieDetailsSaga, getMovieDetails);
}
