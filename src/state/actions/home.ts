import { HomeSaga } from "../../common/enums/sagas/home"

export const setPopularMovieList = () => {
    return {
        type: HomeSaga.SetPopularMovieListSaga
    }
}