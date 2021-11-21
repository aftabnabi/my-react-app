import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import News from './pages/news';
import About from './pages/about';
import Faq from './pages/faq';
import React from 'react';
import Home from './pages/home';

class Footer extends React.Component {
  render() {
    return (
    <div className="App-footer">
      <nav className="footer-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>

      
    </div>
  

    );
  }
}

export default Footer;