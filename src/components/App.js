import movies from "../containers/movies";
import Nav from "./nav"
import Movies from "../containers/movies"
function App() {
  return (
    <div className="App bg-gray-600 ">
      <Nav />
      <div className="home grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
         <Movies />
      </div>
     
     <h1>Hello</h1>
    </div>
  );
}

export default App;
