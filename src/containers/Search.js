
import {useParams} from 'react-router-dom'
import {useEffect,useState} from "react"
import {connect} from "react-redux";

import MCard from "../components/MCard"
import {searchFor} from "../actions"



const  Search=(props)=> {

    let { term } = useParams();
    const [termstate,setTerm] = useState(term)
    useEffect(() =>  props.searchFor(termstate), []);
    console.log(termstate)
    if(term !== termstate) {
        props.searchFor(term)
        setTerm(term)
    }
    
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
        <div className="grid gap-2 p-2 grid-cols-1 md:grid-cols-3  lg:grid-cols-6"> 
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

