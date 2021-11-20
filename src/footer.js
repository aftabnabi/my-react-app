import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import News from './pages/news';
import About from './pages/about';
import Faq from './pages/faq';
import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <div>
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </div>
  </Router>
</div>
    );
  }
}

export default Footer;