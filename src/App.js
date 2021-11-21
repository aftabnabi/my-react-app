import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import News from './pages/news';
import About from './pages/about';
import Faq from './pages/faq';
import Footer from './footer';
import Home from './pages/home';
import Counter from './pages/counter';
import Contact from './pages/contact';
import routePaths from './enums/routePaths';


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


function NavBar(){
  return (<div className="topnav" id="myTopnav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/News">News</Link>
    <Link to="/counter">Counter</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/faq">FAQ</Link>
    <Link to="#" onClick={()=>{if (document.getElementById("myTopnav").className === "topnav") {
    document.getElementById("myTopnav").className += " responsive";
  } else {
    document.getElementById("myTopnav").className = "topnav";
  }
}}>
  
    
      <i className="fa fa-bars" aria-hidden="true"></i>
    </Link>
    <SearchBar />
  </div>
  
  );}

//create search bar component
function SearchBar(){
  return <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
}


function App() {
  return (
    <>
    <Router>
    <div className="App">
          <NavBar />
       </div>
      
<Switch>
    <Route exact path={routePaths.HOME}  component={Home}/>
    <Route path={routePaths.ABOUT} component={About} />
    <Route path={routePaths.NEWS} component={News} />
    <Route path={routePaths.FAQ} component={Faq} />
    <Route path={routePaths.COUNTER} component={Counter} />
    <Route path={routePaths.CONTACT} component={Contact} />
  </Switch>
  <Footer />
  </Router>
   
      </>
      
);
}

export default App;
