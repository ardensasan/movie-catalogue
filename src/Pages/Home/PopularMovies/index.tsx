import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import { State } from "./types";

const PopularMovies: FC<{}> = () => {
  const popularMovieList = useSelector(
    (state: State) => state.home.popularMovieList
  );
  if (!popularMovieList.length) return null;
  return (
    <Fragment>
      <h1>POPULAR MOVIES</h1>
      {popularMovieList.map((movie) => {
        return movie.original_title;
      })}
    </Fragment>
  );
};

export default PopularMovies;
