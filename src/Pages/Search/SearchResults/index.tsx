import { Container, Pagination } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { MovieDefaults } from "../../../common/defaults/movie";
import { Path } from "../../../common/enums/path";
import { SearchState } from "./types";

const SearchResults = () => {
  const { movieList, page, totalPages, language, genreID, query } = useSelector(
    (state: SearchState) => state.search
  );
  const history = useHistory();
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (genreID) {
      history.push(`${Path.SearchByGenre}${genreID}/page/${value}`);
    } else if (language) {
      history.push(`${Path.SearchByLanguage}${language}/page/${value}`);
    } else if (query) {
      history.push(`${Path.SearchByQuery}${query}/page/${value}`);
    }
  };

  return (
    <Fragment>
      {!!movieList.length ? (
        <Fragment>
          {movieList.map((movie: any) => {
            return (
              <Link to={`${Path.Movie}${movie.id}`} key={movie.id}>
                <img
                  src={`${MovieDefaults.PosterURL}${movie.poster_path}`}
                  alt={movie.original_title}
                  width={window.innerWidth / 6}
                  height={(window.innerWidth / 6) * 1.5}
                />
              </Link>
            );
          })}
          <Container maxWidth="sm">
            <Pagination
              count={totalPages}
              page={page}
              color="primary"
              size="large"
              variant="outlined"
              shape="rounded"
              onChange={handleChangePage}
            />
          </Container>
        </Fragment>
      ) : (
        "No Results"
      )}
    </Fragment>
  );
};

export default SearchResults;
