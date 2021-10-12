import { useDispatch } from "react-redux";
import { setPopularMovieList } from "../../state/actions/home";
import PopularMovies from "./PopularMovies";

const Home = () => {
    const dispatch = useDispatch();
    dispatch(setPopularMovieList())
    return <PopularMovies></PopularMovies>
}

export default Home;