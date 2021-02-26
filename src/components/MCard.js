import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";

const MCard=(props)=> {

const movie = props.obj
const {stype}= props
const checkname=(name)=>{
    if(name.length >20){
        return `${name.slice(0,20)}...`
    }else {
        return name
    }
}
    return (
       
            <Link to={`/${stype}/${movie.id}`}>
        <div className="relative rounded-lg  cursor-pointer hover:shadow-blue hover:shadow-blue hover:bg-blue-400"> 
             <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
             <div className="p-2">
             <h1 className="text-white text-lg capitalize font-bold">{checkname(props.name)} </h1>  
            <p className="text-gray-100">{movie.overview.slice(0,80)}... </p>  
            </div>
            <span className="absolute bg-gray-600 bg-opacity-50 px-2 py-1 top-4 left-0 rounded-r-lg text-gray-50"><FontAwesomeIcon icon={faStar} /> {movie.vote_average}</span> 
        </div>
        </Link>
      
    )
}
export default MCard;