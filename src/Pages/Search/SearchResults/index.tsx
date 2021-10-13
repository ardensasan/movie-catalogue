import { Container, Pagination } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MovieDefaults } from "../../../common/defaults/movie";
import { Path } from "../../../common/enums/path";
import { searchByGenre, searchByLanguage } from "../../../state/actions/search";

const SearchResults = () => {
  const {movieList,page,totalPages,language,genreID} = useSelector((state: any) => state.search);
  const dispatch = useDispatch();
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if(genreID){
      dispatch(searchByGenre(genreID, value.toString()));
    }else if(language){
      dispatch(searchByLanguage(language, page));
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
