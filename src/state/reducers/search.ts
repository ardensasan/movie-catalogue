import { SearchActions } from "../../common/enums/actions/search";

const INITIAL_STATE = {
  language: undefined,
  genreID: undefined,
  page: 1,
  movieList: [],
};
const searchReducer = (state = INITIAL_STATE, action: any) => {
  const { type } = action;
  switch (type) {
    case SearchActions.SearchByLanguage:
      const { movieList: lMovieList, page: lPage, language } = action;
      return {
        ...state,
        movieList: lMovieList,
        lPage,
        language,
        genreID: undefined,
      };
    case SearchActions.SearchByGenre:
      const { movieList: gMovieList, page: gPage, genreID } = action;
      return {
        ...state,
        movieList: gMovieList,
        page: gPage,
        genreID,
        language: undefined,
      };
    default:
      return state;
  }
};

export default searchReducer;
