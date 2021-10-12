import { FC, Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { MovieDefaults } from "../../../common/defaults/movie";
import { Props } from "./types";

const MovieCarousel: FC<Props> = ({ type }) => {
  const movieList = useSelector((state: any) => {
    if (type === "Popular") {
      return state.home.popularMovieList;
    } else if (type === "Top Rated") {
      return state.home.topRatedMovieList;
    } else if (type === "Upcoming") {
      return state.home.upcomingMovieList;
    } else {
      return [];
    }
  });

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
  return (
    <Fragment>
      <h1>{type}</h1>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
      >
        {movieList?.map((movie: any) => {
          return (
            <div key={movie.id}>
              <img
                src={`${MovieDefaults.PosterURL}${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default MovieCarousel;