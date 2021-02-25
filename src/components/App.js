import movies from "../containers/movies";
import Nav from "./nav"
import Movies from "../containers/movies"
import Shows from "../containers/tvshows"
function App() {
  return (
    <div className="App bg-gray-600 ">
      <Nav />
      <div className="home px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
         <Movies />
         <Shows />
      </div>
     
     <h1>Hello</h1>
    </div>
  );
}

export default App;
