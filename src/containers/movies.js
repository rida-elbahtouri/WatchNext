import {connect} from "react-redux";
import {getMovies} from "../actions"
import React from "react"

class movies extends React.Component {

    componentDidMount(){
        this.props.getMovies()
    }
    getmovies(){
        console.log(this.props.Movies)
    }
    render() {


       return (
        <div>
            {this.getmovies()}
            <h1>
                title
            </h1>
            <p>
                desc
            </p>
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