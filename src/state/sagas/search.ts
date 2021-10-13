import { call, put, takeLatest } from "@redux-saga/core/effects";
import { SearchActions } from "../../common/enums/actions/search";
import { SearchSaga } from "../../common/enums/sagas/search";
import {
  fetchSearchByGenreMovieList,
  fetchSearchByLanguageMovieList,
  fetchSearchByQueryMovieList,
} from "../../utils/search";

function* getSearchByLanguageResults({ language, page }: any): any {
  page = parseInt(page);
  const response = yield call(fetchSearchByLanguageMovieList, language, page);
  const { results: movieList, total_results } = response.data;
  yield put({
    type: SearchActions.SearchByLanguage,
    movieList,
    page,
    language,
    totalPages: Math.ceil(total_results / 20),
  });
}

function* getSearchByGenreResults({ genreID, page }: any): any {
  page = parseInt(page);
  const response = yield call(fetchSearchByGenreMovieList, genreID, page);
  const { results: movieList, total_results } = response.data;
  yield put({
    type: SearchActions.SearchByGenre,
    movieList,
    page,
    genreID,
    totalPages: Math.ceil(total_results / 20),
  });
}

function* getSearchByQuery({ query, page }: any): any {
  const response = yield call(fetchSearchByQueryMovieList, query, page);
  const { results: movieList, total_results } = response.data;
  yield put({
    type: SearchActions.SearchByQuery,
    movieList,
    page,
    query,
    totalPages: Math.ceil(total_results / 20),
  });
}

export function* watchSearchByQuerySaga() {
  yield takeLatest(SearchSaga.SearchByQuerySaga, getSearchByQuery);
}

export function* watchSearchByLanguageSaga() {
  yield takeLatest(SearchSaga.SearchByLanguageSaga, getSearchByLanguageResults);
}

export function* watchSearchByGenreSaga() {
  yield takeLatest(SearchSaga.SearchByGenreSaga, getSearchByGenreResults);
}
