import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import { State } from "./types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieDefaults } from "../../../common/defaults/movie";
const PopularMovies: FC<{}> = () => {
  const popularMovieList = useSelector(
    (state: State) => state.home.popularMovieList
  );
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
  };

  if (!popularMovieList.length) return null;
  return (
    <Fragment>
      <h1>Popular</h1>
      <Carousel responsive={responsive}>
        {popularMovieList.map((movie) => {
          return (
            <div key={movie.id}>
              <img src={`${MovieDefaults.PosterURL}${movie.poster_path}`} alt={movie.original_title}></img>
            </div>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default PopularMovies;
