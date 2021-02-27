import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Nav from "./nav"
import Movies from "../containers/movies"
import Shows from "../containers/tvshows"
import Movie from "../containers/Movie"
import TvShow from "../containers/TvShow"
import Search from "../containers/Search"


function App() {
  return (
    <div className="App bg-gray-800 ">
   
      <Router>
         <Nav />
      <Switch>
          <Route exact path="/">
            <div className="home grid grid-cols-1 sm:grid-cols-2">
              <Movies />
              <Shows />
            </div>
          </Route>
          <Route path="/movie/:id" component={Movie} />
          <Route path="/tvshow/:id" component={TvShow} />
          <Route path="/search/:term" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
