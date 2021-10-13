import { FC } from "react";
import { useDispatch } from "react-redux";
import { searchByGenre, searchByLanguage } from "../../state/actions/search";
import SearchResults from "./SearchResults";
import { Props } from "./types";

const Search:FC<Props> = (props:Props) => {
    const dispatch = useDispatch();
    if(props.match.params.genreID){
        dispatch(searchByGenre(props.match.params?.genreID,props.match.params.page))
    }else{
        dispatch(searchByLanguage(props.match.params?.language,props.match.params.page))
    }
    return <SearchResults/>;
}

export default Search;