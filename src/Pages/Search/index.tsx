import { FC } from "react";
import { useDispatch } from "react-redux";
import { searchByGenre, searchByLanguage } from "../../state/actions/search";
import SearchResults from "./SearchResults";
import { Props } from "./types";

const Search: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const {
    page,
    language = undefined,
    genreID = undefined,
  } = props.match.params;
  if (genreID) {
    dispatch(searchByGenre(genreID, page));
  } else if (language) {
    dispatch(searchByLanguage(language, page));
  }
  return <SearchResults />;
};

export default Search;
