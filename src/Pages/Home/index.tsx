import { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  setPopularMovieList,
  setTopRatedMovieList,
  setUpcomingMovieList,
} from "../../state/actions/home";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(setPopularMovieList());
  dispatch(setTopRatedMovieList());
  dispatch(setUpcomingMovieList());
  return (
    <Fragment>
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
    </Fragment>
  );
};

export default Home;
