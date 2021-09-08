import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Doctors from './components/Doctors.js';
import Category from './components/Category.js';
import Fag from './components/Fag.js';
import Service from './components/Service.js';
import Team from './components/Team.js';
import Footer from './components/Footer.js';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from './components/About';
import Fagmenu from './components/Fagmenu';
import Contact from './components/Contact';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <Route path="/fagmenu">
            <Fagmenu />
          </Route>
          <Route path="/about">
            <About />
            <Service />
            <Team />
          </Route>
          <Route path="/">
            <Home />
            <Category />
            <Fag />
            <Service />
            <Team />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
