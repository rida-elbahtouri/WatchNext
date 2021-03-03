
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
const reviews =(props)=> {
    const r = props.review
    const checkImg =(url)=>{
        if(!url){
            return 'https://via.placeholder.com/150x150.png?text=No+Photo'
            
        }else if(url.includes("https://") ){
            return url.slice(1, -1)
        }

        else {
            return `https://image.tmdb.org/t/p/w500${url}`
        }
    
    }
    const renderifexistrating = (rt)=>{
        if(rt){
            return (<span className="text-md text-gray-400  bg-opacity-50 px-2 py-1" ><FontAwesomeIcon icon={faStar} />  {rt}</span>)
        }
    }
    return (
        <div className="flex border border-gray-500 p-2 my-2 rounded-md" key={r.id}>
        <img className="rounded-full max-h-14  w-14" src={checkImg(r.author_details.avatar_path)} alt={r.author} />
        <div className="ml-2">
        <h2 className="text-lg text-gray-200">
             {r.author} 
              {renderifexistrating(r.author_details.rating)} 
             </h2>
             <p className="text-md text-gray-100">
                 {r.content}
             </p>
        </div>
         </div>
    )
}
export default reviews