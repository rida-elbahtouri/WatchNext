import {useParams} from 'react-router-dom'
import {useState ,useEffect} from "react"
import {connect} from "react-redux";


import {getMovieDet} from "../actions"
import Details from '../components/details'
const  Movie=(props)=> {

    let { id } = useParams();
    useEffect(() => props.getMovieDet(id), []);
    
    const renderMovie=(m)=> {
        if(m.title){
            return (
               <Details m={m} name={m.title} release_date={m.release_date} />
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