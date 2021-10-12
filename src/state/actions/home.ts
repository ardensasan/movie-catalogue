import { HomeSaga } from "../../common/enums/sagas/home"

export const setLatestMovieList = () => {
    return {
        type: HomeSaga.SetPopularMovieListSaga
    }
}