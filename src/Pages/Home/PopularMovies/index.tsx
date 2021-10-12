import { useSelector } from "react-redux";

const PopularMovies = () => {
  const popularMovieList = useSelector(
    (state: any) => state.home.popularMovieList
  );
  return popularMovieList.length
    ? popularMovieList.map(() => {
        return "okay";
      })
    : null;
};

export default PopularMovies;
