import "./stylesheets/App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import RepoInfo from "./component/RepoInfo";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact render={(props) => (
          <Home />
        )}/>
        <Route path='/repoInfo/:user/:name' component={RepoInfo}/>
      </div>
    </Router>
  );
}

export default App;
