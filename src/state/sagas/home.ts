import { HomeSaga } from "../../common/enums/sagas/home";
import {takeLatest,call,put} from 'redux-saga/effects'
import { fetchPopularMovieList } from "../../utils/home";
import { HomeActions } from "../../common/enums/actions/home";
function* getPopularMovieList():any{
    const response = yield call(fetchPopularMovieList)
    const {results:movieList} = response.data;
    yield put({type: HomeActions.SetPopularMovieList,movieList})
}

export function* watchSetPopularMovieListSaga(){
    yield takeLatest(HomeSaga.SetPopularMovieListSaga,getPopularMovieList)
}