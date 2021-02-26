import {useParams} from 'react-router-dom'
import {useState} from "react"
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import {getMovieDet} from "../actions"

const  Movie=(props)=> {

    let { id } = useParams();
    const [Movie,setMovie] = useState(props.Movie);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    if(Movie.length === 0 ){
        setMovie(props.getMovieDet(id))
    }
    
    const renderMovie=(m)=> {
        if(m.title){
            return (
                <div className="text-center mx-auto p-5 max-w-6xl">
                <h1 className="text-white text-2xl capitalize font-bold"> {m.title} </h1>
                <div className="relative max-w-lg mx-auto">
                <img className="rounded-t-lg w-full " src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} />
                <span className="absolute bg-gray-600 bg-opacity-50 px-2 py-1 top-4 left-0 rounded-r-lg text-gray-50"><FontAwesomeIcon icon={faStar} /> 
                {m.vote_average}({m.vote_count}) </span>
                </div>
                
                <p className="text-gray-100 text-md capitalize"> Release Date :
                <span>
                {m.release_date.slice(8,10)}
                </span> <span>
                {months[parseInt(m.release_date.slice(5,7),10)-1]}
               </span> <span>
                {m.release_date.slice(0,4)}</span>  </p>
                <p className="text-gray-100 text-md capitalize">Genres</p>
                <ul className="flex justify-center">
                    {m.genres.map(g=>{
                        return <li className="bg-blue-400 text-gray-50 rounded-md p-1 mr-2" key={g.id}>{g.name}</li>
                    })}
                </ul>
                <p className="text-gray-100">{m.overview}</p>
                
                </div>
            )
        }
    }

    return (
        <div> 
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