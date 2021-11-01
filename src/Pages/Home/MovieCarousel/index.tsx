import { Link } from "@mui/material";
import { FC, Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { MovieDefaults } from "../../../common/defaults/movie";
import { Path } from "../../../common/enums/path";
import { HomeState, Props } from "./types";

const MovieCarousel: FC<Props> = ({ type }) => {
  const movieList = useSelector((state: HomeState) => {
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
  
  const error = useSelector((state:HomeState)=>state.home.error)
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

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <Fragment>
      <h1>{!!movieList.length && type}</h1>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
      >
        {movieList?.map((movie: any) => {
          return (
            <div key={movie.id}>
              <Link href={`${Path.Movie}${movie.id}`}>
                <img
                  src={`${MovieDefaults.PosterURL}${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Link>
            </div>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default MovieCarousel;
