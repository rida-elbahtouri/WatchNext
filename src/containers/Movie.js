import {useParams} from 'react-router-dom'
import {useEffect} from "react"
import {connect} from "react-redux";


import {getMovieDet,getReviews} from "../actions"
import Details from '../components/details'
import Reviews from "../components/reviews"
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
 
    const renderReviews = (r) =>{
        
        if(r.length > 0){
           const result = r.map(r=>(
              <Reviews key={r.id} review={r} />
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
    <div className="max-w-4xl rounded-md border border-gray-100 p-7 m-auto">
        <h1 className="text-gray-100 text-xl mb-4">Reviews</h1>
        {renderReviews(props.reviews)}
    </div>
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