import { call, put, takeLatest,spawn } from "@redux-saga/core/effects";
import { SearchActions } from "../../common/enums/actions/search";
import { SearchSaga } from "../../common/enums/sagas/search";
import {
  fetchSearchByGenreMovieList,
  fetchSearchByLanguageMovieList,
  fetchSearchByQueryMovieList,
} from "../../utils/search";

function* getSearchByLanguageResults({ language, page }: any): any {
  try {
    const response = yield call(fetchSearchByLanguageMovieList, language, page);
    const { results: movieList, total_results } = response.data;
    yield put({
      type: SearchActions.SearchByLanguage,
      movieList,
      page: parseInt(page),
      language, 
      totalPages: Math.ceil(total_results / 20),
      error: undefined,
    });
  } catch (error) {
    yield put({ type: SearchActions.SearchMoviesFailed, error });
  }
}

function* getSearchByGenreResults({ genreID, page }: any): any {
  try {
    const response = yield call(fetchSearchByGenreMovieList, genreID, page);
    const { results: movieList, total_results } = response.data;
    yield put({
      type: SearchActions.SearchByGenre,
      movieList,
      page: parseInt(page),
      genreID,
      totalPages: Math.ceil(total_results / 20),
      error: undefined,
    });
  } catch (error) {
    yield put({ type: SearchActions.SearchMoviesFailed, error });
  }
}

function* getSearchByQuery({ query, page }: any): any {
  try {
    const response = yield call(fetchSearchByQueryMovieList, query, page);
    const { results: movieList, total_results } = response.data;
    yield put({
      type: SearchActions.SearchByQuery,
      movieList,
      page,
      query,
      totalPages: Math.ceil(total_results / 20),
      error: undefined,
    });
  } catch (error) {
    yield put({ type: SearchActions.SearchMoviesFailed, error });
  }
}

function* watchSearchByQuerySaga() {
  yield takeLatest(SearchSaga.SearchByQuerySaga, getSearchByQuery);
}

function* watchSearchByLanguageSaga() {
  yield takeLatest(SearchSaga.SearchByLanguageSaga, getSearchByLanguageResults);
}

function* watchSearchByGenreSaga() {
  yield takeLatest(SearchSaga.SearchByGenreSaga, getSearchByGenreResults);
}

export default function* searchRootSaga() {
  yield spawn(watchSearchByGenreSaga);
  yield spawn(watchSearchByLanguageSaga);
  yield spawn(watchSearchByQuerySaga);
}
