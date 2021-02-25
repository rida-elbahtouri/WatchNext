

const MCard=(props)=> {
console.log(props)
const movie = props.obj
    return (
        <div>
             <h1>{movie.title} </h1>      
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview} </p>  
            <p>Rating {movie.vote_average}({movie.vote_count}) </p> 
           
        </div>
    )
}
export default MCard;