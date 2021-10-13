import { SearchActions } from "../../common/enums/actions/search";
import { SearchSaga } from "../../common/enums/sagas/search";

export const searchByLanguage = (
  language: string,
  page: string
) => {
  return {
    type: SearchSaga.SearchByLanguageSaga,
    language,
    page,
  };
};

export const searchByGenre = (genreID: string, page: string) => {
  return {
    type: SearchSaga.SearchByGenreSaga,
    genreID,
    page,
  };
};

export const searchChangePage = (page:number) => {
  return {
    type: SearchActions.SearchChangePage,
    page
  }
}