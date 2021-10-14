import { useDispatch } from "react-redux";
import { setMovieList } from "../../state/actions/movies";
import MovieList from "../../components/MovieList";
import { FC, Fragment } from "react";
import NavBar from "../../components/NavBar";
import { Props } from "./types";

const Movies:FC<Props> = (props:Props) => {
  const dispatch = useDispatch();
  const {page="1"} = props.match.params;
  dispatch(setMovieList(page));
  return (
    <Fragment>
      <NavBar />
      <MovieList />
    </Fragment>
  );
};

export default Movies;
