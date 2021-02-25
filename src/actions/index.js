import Api from "../Api/baseUrl"
const API_KEY = process.env.REACT_APP_API_KEY 

export const getMovies = ()=>{

    return async (dispatch)=>{
        const res=await Api.get(`discover/movie?api_key=${API_KEY}`)
        dispatch({type:'Movies',payload:res})
    }

}

