import {combineReducers} from "redux";

const MoviesReducer=(state=[],action)=>{
    switch (action.type){
        case 'Movies':
            return action.payload
        default:
            return state
    }
}
const ShowsReducer=(state=[],action)=>{
    switch (action.type){
        case 'Shows':
            return action.payload
        default:
            return state
    }
}
const MovieReducer=(state=[],action)=>{
    switch (action.type){
        case 'Movie':
            return action.payload
        default:
            return state
    }
}
const TvShowReducer=(state=[],action)=>{
    switch (action.type){
        case 'TvShow':
            return action.payload
        default:
            return state
    }
}
const SearchReducer=(state=[],action)=>{
    switch (action.type){
        case 'Search':
            return action.payload
        default:
            return state
    }
}
const ReviewsReducer=(state=[],action)=>{
    switch (action.type){
        case 'Reviews':
            return action.payload
        default:
            return state
    }
}
export default combineReducers({
    Movies:MoviesReducer,
    Shows:ShowsReducer,
    Movie:MovieReducer,
    TvShow:TvShowReducer,
    SearchResult:SearchReducer,
    Reviews:ReviewsReducer
})