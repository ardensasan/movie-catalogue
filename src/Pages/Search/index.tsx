import { FC, Fragment } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import {
  searchByGenre,
  searchByLanguage,
  searchByQuery,
} from "../../state/actions/search";
import SearchResults from "./SearchResults";
import { Props } from "./types";

const Search: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const {
    page,
    language = undefined,
    genreID = undefined,
    query = undefined,
  } = props.match.params;
  if (genreID && !language && !query) {
    dispatch(searchByGenre(genreID, page));
  } else if (language && !genreID && !query) {
    dispatch(searchByLanguage(language, page));
  } else if (query && !language && !genreID) {
    dispatch(searchByQuery(query, page));
  }
  return (
    <Fragment>
      <NavBar />
      <SearchResults />
    </Fragment>
  );
};

export default Search;
