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

export default combineReducers({
    Movies:MoviesReducer,
    Shows:ShowsReducer
})