import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          <li><Link to="/preferences">Preference</Link></li>
          {/* <li><Link to="/">About</Link></li> */}
        </ul>
        {this.props.children}
      </div>
    );
  }
}