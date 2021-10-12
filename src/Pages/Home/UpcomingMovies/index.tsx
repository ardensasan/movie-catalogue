import { Fragment } from "react";
import { useSelector } from "react-redux";

const UpcomingMovies = () => {
  const upcomingMovieList = useSelector(
    (state: any) => state.home.upcomingMovieList
  );
  if (!upcomingMovieList.length) return null;
  return (
    <Fragment>
      <h1>UPCOMING MOVIES</h1>
      {upcomingMovieList.map((movie: any) => {
        return movie.original_title;
      })}
    </Fragment>
  );
};

export default UpcomingMovies;
