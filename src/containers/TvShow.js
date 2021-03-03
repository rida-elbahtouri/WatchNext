import {useParams} from 'react-router-dom'
import {useEffect} from "react"
import {connect} from "react-redux";


import {getTvShowDet,getReviews} from "../actions"
import Details from '../components/details'
import Reviews from "../components/reviews"

const  TvShow=(props)=> {

    let { id } = useParams();
   
    useEffect(() => {
       props.getTvShowDet(id) 
       props.getReviews("tv",id)
    }
    
    , []);
    
    
    const renderTvShow=(m)=> {
        if(m.name){
            return (
               <Details m={m} name={m.name} release_date={m.first_air_date} />
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
    {renderTvShow(props.TvShow)}       
    <div className="max-w-4xl rounded-md border border-gray-100 p-7 m-auto">
        <h1 className="text-gray-100 text-xl mb-4">Reviews</h1>
        {renderReviews(props.reviews)}
    </div>  
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        TvShow:state.TvShow,
        reviews:state.Reviews
    }
}

export default connect(mapStateToProps,{getTvShowDet,getReviews})(TvShow)

