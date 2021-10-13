import { HomeSaga } from "../../common/enums/sagas/home";
import { takeLatest, call, put, fork } from "@redux-saga/core/effects";
import { HomeActions } from "../../common/enums/actions/home";
import { HomeEndpoint } from "../../common/defaults/endpoints/home";
import { fetchMovieList } from "../../utils/home";
//worker functions
function* getPopularMovieList(): any {
  const response = yield call(fetchMovieList,HomeEndpoint.PopularMoviesEndpoint);
  const { results: popularMovieList } = response.data;
  yield put({ type: HomeActions.SetPopularMovieList, popularMovieList });
}

function* getTopRatedMovieListSaga(): any {
  const response = yield call(fetchMovieList,HomeEndpoint.TopRatedMoviesEndpoint);
  const { results: topRatedMovieList } = response.data;
  yield put({ type: HomeActions.SetTopRatedMovieList, topRatedMovieList });
}

function* getUpcomingMovieListSaga(): any {
  const response = yield call(fetchMovieList,HomeEndpoint.UpcomingMoviesEndpoint);
  const { results: upcomingMovieList } = response.data;
  yield put({ type: HomeActions.SetUpcomingMovieList, upcomingMovieList });
}

//watcher function
function* watchUpcomingMovieListSaga() {
  yield takeLatest(HomeSaga.SetUpcomingMovieListSaga, getUpcomingMovieListSaga);
}
function* watchSetTopRatedMovieListSaga() {
  yield takeLatest(HomeSaga.SetTopRatedMovieListSaga, getTopRatedMovieListSaga);
}
function* watchSetPopularMovieListSaga() {
  yield takeLatest(HomeSaga.SetPopularMovieListSaga, getPopularMovieList);
}

export default function* rootSaga() {
  yield fork(watchSetTopRatedMovieListSaga);
  yield fork(watchSetPopularMovieListSaga);
  yield fork(watchUpcomingMovieListSaga);
}