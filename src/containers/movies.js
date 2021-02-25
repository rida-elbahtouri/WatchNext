import {connect} from "react-redux";
import {getMovies} from "../actions"
import MCard from "../components/MCard"
import React from "react"

class movies extends React.Component {

    componentDidMount(){
        this.props.getMovies()
    }
    getmovies(){
      const Movies = this.props.Movies.slice(0, 8)
       const result = Movies.map(movie=>(
           <MCard name = {movie.title} obj={movie} />
         ))
         return result
    }
    render() {


       return (
            <div>
            <h1 className="grid-span-full text-2xl text-gray-50 my-2" >Movies</h1>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {this.getmovies()}
            </div>
            </div>
    )  
    }
   
}
const mapStateToProps=(state)=>{
    return{
        Movies:state.Movies
    }
}

export default connect(mapStateToProps,{getMovies})(movies)