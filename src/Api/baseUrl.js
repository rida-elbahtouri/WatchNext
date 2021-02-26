import axios from "axios"
const API_KEY = process.env.REACT_APP_API_KEY 


const baseurl = `https://api.themoviedb.org/3/`
export default axios.create({
    baseURL:baseurl
})


export const GetMovieDetails=async(id)=>{
    const res = await axios.get(`${baseurl}movie/${id}?api_key=${API_KEY}`)
    
    return res
}