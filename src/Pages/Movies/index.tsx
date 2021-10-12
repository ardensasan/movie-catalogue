import { useDispatch } from "react-redux";
import { setMovieList } from "../../state/actions/movies";
import MovieList from "../../components/MovieList";
import { Fragment } from "react";
import NavBar from "../../components/NavBar";

const Movies = () => {
  const dispatch = useDispatch();
  dispatch(setMovieList("1"));
  return (
    <Fragment>
      <NavBar />
      <MovieList />
    </Fragment>
  );
};

export default Movies;
