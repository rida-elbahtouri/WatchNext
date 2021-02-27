import {
    Link
  } from "react-router-dom";
import {useState} from "react"


const Nav =()=>{

    const [term,setTerm] = useState("");
    const Honchange = (e)=>{
        setTerm(e.target.value)
    }


return (
    <nav className="bg-black py-5 p-4 flex align-middle box-border justify-between">
    <div className="flex align-middle h-8">
    <Link to={"/"}>
    <h1 className="text-xl m-0 font-bold text-gray-200  h-8">WATCHNEXT</h1></Link>
    </div>
    <div className="flex align-middle box-border ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-600">
        <input onChange={Honchange} className="bg-gray-800 rounded-l-lg box-border w-64 focus:outline-none  p-2 text-white  text-lg h-10" type="text" />
        <Link to={`/search/${term}`}>
        <button className="text-white rounded-r-lg box-border px-2 h-10 text-center bg-gray-600" >Search</button>
        </Link>

    </div>
    </nav>
)
}

export default Nav;