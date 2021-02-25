import {connect} from "react-redux";
import {getShows} from "../actions"
import MCard from "../components/MCard"
import React from "react"

class shows extends React.Component {

    componentDidMount(){
        this.props.getShows()
    }
    displayShows(){
      const Shows = this.props.Shows.slice(0, 8)
       const result = Shows.map(s=>(
           <MCard name={s.name} obj={s} />
         ))
         return result
    }
    render() {


       return (
            <div className="bg-gray-800 p-4">
            <h1 className="grid-span-full text-2xl text-gray-50 my-2" >Tv Shows</h1>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {this.displayShows()}
            </div>
            </div>
    )  
    }
   
}
const mapStateToProps=(state)=>{
    return{
        Shows:state.Shows
    }
}

export default connect(mapStateToProps,{getShows})(shows)