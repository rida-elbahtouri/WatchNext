import {useParams} from 'react-router-dom'
import {useState} from "react"
import {GetMovieDetails} from "../Api/baseUrl"
import {connect} from "react-redux";
import {getMovieDet} from "../actions"

const  Movie=(props)=> {

    let { id } = useParams();
    const [Movie,setMovie] = useState(props.Movie);

    if(Movie.length === 0 ){
        setMovie(props.getMovieDet(id))
    }
    
    const renderMovie=(m)=> {
        if(m.title){
            return (
                <div>
                <h1> {m.title} </h1>
                <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} />
                <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} />
                <span> {m.release_date}  </span>
                <p>{m.overview}</p>
                </div>
            )
        }
    }

    return (
        <div>
    <h1>Movie Detail</h1>   
    {renderMovie(props.Movie)}         
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        Movie:state.Movie
    }
}

export default connect(mapStateToProps,{getMovieDet})(Movie)