import React from 'react';  // eslint-disable-line no-unused-vars
//news list from data.json
import news from '../data/news.json';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      //create main content component
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
}
