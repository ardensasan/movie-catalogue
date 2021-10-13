import { useSelector } from "react-redux";

const SearchResults = () => {
    const movieList = useSelector((state:any)=>state.search)
    console.log('%c 🍮 movieList: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', movieList);
    return null;
}

export default SearchResults;