import { FC, Fragment } from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { MovieDefaults } from "../../../common/defaults/movie";
import { State } from "./types";

const TopRatedMovies: FC<{}> = () => {
  const topRatedMovieList = useSelector(
    (state: State) => state.home.topRatedMovieList
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

  if (!topRatedMovieList.length) return null;
  return (
    <Fragment>
        <h1>Top Rated</h1>
      <Carousel responsive={responsive}>
        {topRatedMovieList.map((movie) => {
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

export default TopRatedMovies;
