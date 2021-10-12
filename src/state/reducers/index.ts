import {combineReducers} from 'redux'
import homeReducer from './home'
import moviesReducer from './movies'
export default combineReducers({
    home:homeReducer,
    movies:moviesReducer
})