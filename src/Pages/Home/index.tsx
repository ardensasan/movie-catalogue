import { Fragment } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import {
  setPopularMovieList,
  setTopRatedMovieList,
  setUpcomingMovieList,
} from "../../state/actions/home";
import MovieCarousel from "./MovieCarousel";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(setPopularMovieList());
  dispatch(setTopRatedMovieList());
  dispatch(setUpcomingMovieList());
  return (
    <Fragment>
      <NavBar/>
      <MovieCarousel type="Popular"/>
      <MovieCarousel type="Top Rated"/>
      <MovieCarousel type="Upcoming"/>
    </Fragment>
  );
};

export default Home;
