import {useParams} from 'react-router-dom'
import {useEffect} from "react"
import {connect} from "react-redux";


import {getTvShowDet} from "../actions"
import Details from '../components/details'


const  TvShow=(props)=> {

    let { id } = useParams();
   
    useEffect(() =>  props.getTvShowDet(id), []);
    
    
    const renderTvShow=(m)=> {
        if(m.name){
            return (
               <Details m={m} name={m.name} release_date={m.first_air_date} />
            )
        }
    }
    return (
        <div> 
    {renderTvShow(props.TvShow)}         
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        TvShow:state.TvShow
    }
}

export default connect(mapStateToProps,{getTvShowDet})(TvShow)

