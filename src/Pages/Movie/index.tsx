import { FC, Fragment } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import { setMovieDetails } from "../../state/actions/movie";
import MovieDetails from "./MovieDetails";
import { Props } from "./types";

const Movie: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  dispatch(setMovieDetails(props.match.params.id));
  return (
    <Fragment>
      <NavBar />
      <MovieDetails />
    </Fragment>
  );
};

export default Movie;
