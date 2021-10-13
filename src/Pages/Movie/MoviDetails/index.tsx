import { useSelector } from "react-redux"

const MovieDetails = () =>{
    const movieDetails = useSelector((state:any)=>state.movie.movieDetails)
    console.log(movieDetails)
    return null;
}

export default MovieDetails