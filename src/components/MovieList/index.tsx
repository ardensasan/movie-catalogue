import { useSelector } from "react-redux";

const MovieList = () =>{
    const movieList = useSelector((state:any)=>state.movies.movieList)
    console.log(movieList)
    return null;
}

export default MovieList;