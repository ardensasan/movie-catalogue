import { FC, Fragment } from "react";
import { useSelector } from "react-redux";

const TopRatedMovies: FC<{}> = () => {
  const topRatedMovieList = useSelector(
    (state: any) => state.home.topRatedMovieList
  );
  if (!topRatedMovieList.length) return null;
  return (
    <Fragment>
      <h1>TOP RATED</h1>
      {topRatedMovieList.map((movie: any) => {
        return movie.original_title;
      })}
    </Fragment>
  );
};

export default TopRatedMovies;
