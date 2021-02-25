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
           <MCard obj={movie} />
         ))
         return result
    }
    render() {


       return (
            <div className="col-span-3">
            <h1 className="grid-span-full" >Movies</h1>
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
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