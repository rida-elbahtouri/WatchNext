
import {useParams} from 'react-router-dom'
import {useEffect} from "react"
import {connect} from "react-redux";

import MCard from "../components/MCard"
import {searchFor} from "../actions"



const  Search=(props)=> {

    let { term } = useParams();
   
    useEffect(() =>  props.searchFor(term), []);
    console.log(props.result)
    
    const renderSearch=(list)=> {
        if(list.length !=0){

            const result = list.map(m=>{
             if(m.media_type === "movie"){
                 return (
                <MCard stype="movie" name = {m.title} obj={m} />
                )
                }else if(m.media_type === "tv"){
                    return (
                          <MCard stype="tvshow" name={m.name} obj={m} />
                    )
              
                }
            })
            return result;
        }
    }
    return (
        <div> 
    {renderSearch(props.result)}         
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        result:state.SearchResult
    }
}

export default connect(mapStateToProps,{searchFor})(Search)

