import { Container, Pagination } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { MovieDefaults } from "../../common/defaults/movie";
import { Path } from "../../common/enums/path";

const MovieList = () => {
  const { movieList, page, totalPage } = useSelector(
    (state: any) => state.movies
  );

  const history = useHistory();
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    history.push(`${Path.Movies}page/${page}`);
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
              count={totalPage}
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

export default MovieList;
