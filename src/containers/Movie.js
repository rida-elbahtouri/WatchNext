import {useParams} from 'react-router-dom'
import {useEffect} from "react"
import {connect} from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import {getMovieDet,getReviews} from "../actions"
import Details from '../components/details'
const  Movie=(props)=> {

    let { id } = useParams();
    useEffect(() =>{
        props.getMovieDet(id)
        props.getReviews("movie",id)
    } , []);
    console.log(props.reviews)
    const renderMovie=(m)=> {
        if(m.title){
            return (
               <Details m={m} name={m.title} release_date={m.release_date} />
            )
        }
    }
    const renderifexistrating = (rt)=>{
        if(rt){
            return (<span className="text-md text-gray-400  bg-opacity-50 px-2 py-1" ><FontAwesomeIcon icon={faStar} />  {rt}</span>)
        }
    }
    const renderReviews = (r) =>{
        
        if(r.length > 0){
           const result = r.map(r=>(
                <div key={r.id}>
                    <h2 className="text-lg text-gray-200">
                         {r.author} 
                          {renderifexistrating(r.author_details.rating)} 
                         </h2>
                    
                     </div>
            ))
            return result;
        }
        else{
            return (<p className="text-gray-100 text-lg" > No reviews yet</p>)
        }
        
    }

    return (
        <div> 
    {renderMovie(props.Movie)}       
        {renderReviews(props.reviews)}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        Movie:state.Movie,
        reviews:state.Reviews
    }
}

export default connect(mapStateToProps,{getMovieDet,getReviews})(Movie)