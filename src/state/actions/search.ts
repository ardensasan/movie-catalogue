import { SearchSaga } from "../../common/enums/sagas/search";

export const searchByLanguage = (
  language: string | undefined,
  page: string
) => {
  if (!language) return;
  return {
    type: SearchSaga.SearchByLanguageSaga,
    language,
    page,
  };
};

export const searchByGenre = (genreID: string | undefined, page: string) => {
  if (!genreID) return;
  return {
    type: SearchSaga.SearchByGenreSaga,
    genreID,
    page,
  };
};
