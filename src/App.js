import "./assets/css/App.css";
import Sidebar from "./components/Sidebar";
import AboutMe from "./views/AboutMe";
import Resume from "./views/Resume";
import Portifolio from "./views/Portifolio";
import Contact from "./views/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/bio-website">
        <Sidebar />
        <div className="side-line">
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/resume" component={Resume} />
            <Route path="/portifolio" component={Portifolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
