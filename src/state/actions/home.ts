import { HomeSaga } from "../../common/enums/sagas/home"

export const setPopularMovieList = () => {
    return {
        type: HomeSaga.SetPopularMovieListSaga
    }
}

export const setTopRatedMovieList = () =>{
    return {
        type: HomeSaga.SetTopRatedMovieListSaga
    }
}

export const setUpcomingMovieList = () =>{
    return {
        type: HomeSaga.SetUpcomingMovieListSaga
    }
}