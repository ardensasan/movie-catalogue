import { HomeSaga } from "../../common/enums/sagas/home";
import { takeLatest, call, put, fork } from "redux-saga/effects";
import {
  fetchPopularMovieList,
  fetchTopRatedMovieList,
  fetchUpcomingMovieList,
} from "../../utils/home";
import { HomeActions } from "../../common/enums/actions/home";
function* getPopularMovieList(): any {
  const response = yield call(fetchPopularMovieList);
  const { results: popularMovieList } = response.data;
  yield put({ type: HomeActions.SetPopularMovieList, popularMovieList });
}

function* watchSetPopularMovieListSaga() {
  yield takeLatest(HomeSaga.SetPopularMovieListSaga, getPopularMovieList);
}

function* getTopRatedMovieListSaga(): any {
  const response = yield call(fetchTopRatedMovieList);
  const { results: topRatedMovieList } = response.data;
  yield put({ type: HomeActions.SetTopRatedMovieList, topRatedMovieList });
}

function* watchSetTopRatedMovieListSaga() {
  yield takeLatest(HomeSaga.SetTopRatedMovieListSaga, getTopRatedMovieListSaga);
}

function* getUpcomingMovieListSaga(): any {
  const response = yield call(fetchUpcomingMovieList);
  const { results: upcomingMovieList } = response.data;
  yield put({ type: HomeActions.SetUpcomingMovieList, upcomingMovieList });
}

function* watchUpcomingMovieListSaga() {
  yield takeLatest(HomeSaga.SetUpcomingMovieListSaga, getUpcomingMovieListSaga);
}

export default function* rootSaga() {
  yield fork(watchSetTopRatedMovieListSaga);
  yield fork(watchSetPopularMovieListSaga);
  yield fork(watchUpcomingMovieListSaga);
}
