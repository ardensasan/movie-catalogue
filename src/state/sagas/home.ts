import { HomeSaga } from "../../common/enums/sagas/home";
import { takeLatest, call, put, fork } from "redux-saga/effects";
import {
  fetchPopularMovieList,
  fetchTopRatedMovieList,
  fetchUpcomingMovieList,
} from "../../utils/home";
import { HomeActions } from "../../common/enums/actions/home";
//worker functions
function* getPopularMovieList(): any {
  const response = yield call(fetchPopularMovieList);
  const { results: popularMovieList } = response.data;
  yield put({ type: HomeActions.SetPopularMovieList, popularMovieList });
}

function* getTopRatedMovieListSaga(): any {
  const response = yield call(fetchTopRatedMovieList);
  const { results: topRatedMovieList } = response.data;
  yield put({ type: HomeActions.SetTopRatedMovieList, topRatedMovieList });
}

function* getUpcomingMovieListSaga(): any {
  const response = yield call(fetchUpcomingMovieList);
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