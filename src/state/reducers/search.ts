import { SearchActions } from "../../common/enums/actions/search";

const INITIAL_STATE = {
  language: undefined,
  genreID: undefined,
  query:undefined,
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
        query: undefined,
      };
    case SearchActions.SearchByGenre:
      return {
        ...state,
        ...rest,
        language: undefined,
        query: undefined,
      };
    case SearchActions.SearchByQuery:
      return { ...state, ...rest, language: undefined, genreID: undefined };
    default:
      return state;
  }
};

export default searchReducer;
