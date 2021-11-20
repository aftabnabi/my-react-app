import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import News from './pages/news';
import About from './pages/about';
import Faq from './pages/faq';
import Footer from './footer';
import Home from './pages/home';

function NavBar(){
  return <Router>
    <div class="topnav" id="myTopnav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/News">News</Link>
    <Link to="/faq">FAQ</Link>
    <Link to={<myFunction />}>
    
      <i class="fa fa-bars" aria-hidden="true"></i>
    </Link>
    <SearchBar />
  </div>
  <Switch>
    <Route exact path="/"  component={Home}/>
    <Route path="/about" component={About} />
    <Route path="/news" component={News} />
    <Route path="/faq" component={Faq} />
  </Switch>
  </Router>
  }

//create search bar component
function SearchBar(){
  return <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function App() {
  return (
    <>

      <div className="App">
          <NavBar />
       </div>
       <Footer />
      </>
      
);
}

export default App;
