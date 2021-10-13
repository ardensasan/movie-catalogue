import { SearchSaga } from "../../common/enums/sagas/search";

export const searchByLanguage = (language: string, page: number) => {
  return {
    type: SearchSaga.SearchByLanguageSaga,
    language,
    page,
  };
};

export const searchByGenre = (genreID: string, page: number) => {
  return {
    type: SearchSaga.SearchByGenreSaga,
    genreID,
    page,
  };
};

export const searchByQuery = (query: string, page: number) => {
  return {
    type: SearchSaga.SearchByQuerySaga,
    query,
    page,
  };
};
