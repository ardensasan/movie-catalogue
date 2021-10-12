import axios from "axios";
const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?api_key=6fdc960c4cb19000df3556ff8e8b5831&language=en-US&page=1";
export const fetchPopularMovieList = async() =>{
    return await axios.get(POPULAR_MOVIES)
}