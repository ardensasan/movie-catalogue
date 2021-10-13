import { SearchActions } from "../../common/enums/actions/search";

const INITIAL_STATE = {
  language: undefined,
  genreID: undefined,
  page: 1,
  movieList: [],
  totalPages: 1,
};
const searchReducer = (state = INITIAL_STATE, action: any) => {
  const { type, ...rest } = action;

  switch (type) {
    case SearchActions.SearchByLanguage:
      return {
        ...state,
        ...rest,
        genreID: undefined,
      };
    case SearchActions.SearchByGenre:
      return {
        ...state,
        ...rest,
        language: undefined,
      };
    case SearchActions.SearchChangePage:
      return { ...state, page:action.page };
    default:
      return state;
  }
};

export default searchReducer;
