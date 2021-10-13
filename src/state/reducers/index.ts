import {combineReducers} from 'redux'
import homeReducer from './home'
import movieReducer from './movie'
import moviesReducer from './movies'
export default combineReducers({
    home:homeReducer,
    movies:moviesReducer,
    movie:movieReducer
})