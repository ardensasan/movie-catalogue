import { call, put, takeLatest } from "@redux-saga/core/effects";
import { SearchActions } from "../../common/enums/actions/search";
import { SearchSaga } from "../../common/enums/sagas/search";
import { fetchSearchByGenreMovieList, fetchSearchByLanguageMovieList } from "../../utils/search";

function* getSearchByLanguageResults({ language, page }: any): any {
  const response = yield call(fetchSearchByLanguageMovieList, language, page);
  const { results: movieList } = response.data;
  yield put({ type: SearchActions.SearchByLanguage, movieList,page,language });
}

function* getSearchByGenreResults({ genreID, page }: any): any {
    const response = yield call(fetchSearchByGenreMovieList, genreID, page);
    const { results: movieList } = response.data;
    yield put({ type: SearchActions.SearchByGenre, movieList,page,genreID });
  }

export function* wachSearchByLanguageSaga() {
  yield takeLatest(SearchSaga.SearchByLanguageSaga, getSearchByLanguageResults);
}

export function* watchSearchByGenreSaga() {
    yield takeLatest(SearchSaga.SearchByGenreSaga, getSearchByGenreResults);
  }
  