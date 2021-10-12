import { Fragment } from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { MovieDefaults } from "../../../common/defaults/movie";
import { State } from "./types";

const UpcomingMovies = () => {
  const upcomingMovieList = useSelector(
    (state: State) => state.home.upcomingMovieList
  );
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  if (!upcomingMovieList.length) return null;
  return (
    <Fragment>
      <h1>Upcoming</h1>
      <Carousel responsive={responsive}>
        {upcomingMovieList.map((movie) => {
          return (
            <div key={movie.id}>
              <img
                src={`${MovieDefaults.PosterURL}${movie.poster_path}`}
                alt={movie.original_title}
              ></img>
            </div>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default UpcomingMovies;
