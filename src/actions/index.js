import Api from "../Api/baseUrl"
const API_KEY = process.env.REACT_APP_API_KEY 

export const getMovies = ()=>{

    return async (dispatch)=>{
        const res=await Api.get(`movie/popular?api_key=${API_KEY}`)
        dispatch({type:'Movies',payload:res.data.results})
    }

}
export const getShows= ()=>{

    return async (dispatch)=>{
        const res=await Api.get(`tv/popular?api_key=${API_KEY}`)
        dispatch({type:'Shows',payload:res.data.results})
    }

}

export const getMovieDet = (id) =>{
    return async (dispatch)=>{
        const res=await Api.get(`movie/${id}?api_key=${API_KEY}`)
        dispatch({type:'Movie',payload:res.data})
    }
}
export const getTvShowDet= (id) =>{
    return async (dispatch)=>{
        const res=await Api.get(`tv/${id}?api_key=${API_KEY}`)
        dispatch({type:'TvShow',payload:res.data})
    }
}
export const searchFor=(term)=>{
    return async (dispatch)=>{
        const res=await Api.get(`search/multi?api_key=${API_KEY}&query=${term}`)
        dispatch({type:'Search',payload:res.data.results})
    }
}
export const getReviews=(mtype,id)=>{
    return async (dispatch)=>{
        const res=await Api.get(`${mtype}/${id}/reviews?api_key=${API_KEY}`)
        dispatch({type:'Reviews',payload:res.data.results})
    }
}