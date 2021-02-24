import "../index.css"
const Nav =()=>{
return (
    <nav className="bg-black py-5 p-4 flex justify-between">
    <div>
    <h1 className="text-xl font-bold text-gray-200">WATCHNEXT</h1>
    </div>
    <div className="flex align-middle box-border ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-600">
        <input className="bg-gray-800 rounded-l-lg box-border w-64 focus:outline-none  p-2 text-white  text-lg h-10" type="text" />
        <button className="text-white rounded-r-lg box-border px-2 h-10 text-center bg-gray-600" >Search</button>
    </div>
    </nav>
)
}

export default Nav;