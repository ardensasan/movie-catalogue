import { HomeSaga } from "../../common/enums/sagas/home";
import {takeLatest,call} from 'redux-saga/effects'
import { fetchPopularMovieList } from "../../utils/home";
function* getPopularMovieList():any{
    const result = yield call(fetchPopularMovieList)
    console.log(result)
    return;
}


export function* watchSetPopularMovieListSaga(){
    yield takeLatest(HomeSaga.SetPopularMovieListSaga,getPopularMovieList)
}