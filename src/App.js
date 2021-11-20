import logo from './logo.svg';
import './App.css';
function NavBar(){
  return <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

}
//create search bar component
function SearchBar(){
  return <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
}
//create main content component
function MainContent(){
  return (
  <>
  <div className="jumbotron">
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4"/>
    <p>It uses utility classes for typography and spacing to space content out within the larger container
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
        </div>
        </>
        );
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
          <SearchBar />
       
        <MainContent />
      </div>
      
      <footer className="App-footer">
      
       <div class="footer-logo">
       <img class="App-logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo"/>
       </div>
       <div class="footer-menu">
       <ul class="footer-menu-ul">
       <li><a href="#">About</a></li>
       <li><a href="#">FAQ</a></li>
       <li><a href="#">Privacy & Terms</a></li>
       </ul>
       </div>
       </footer></>
);
}

export default App;
