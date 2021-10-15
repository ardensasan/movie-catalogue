import { spawn } from "@redux-saga/core/effects";
import homeRootSaga from "./home";
import movieRootSaga from "./movie";
import moviesRootSaga from "./movies";
import searchRootSaga from "./search";

export default function* rootSaga(){
    yield spawn(homeRootSaga)
    yield spawn(movieRootSaga)
    yield spawn(moviesRootSaga)
    yield spawn(searchRootSaga)
}