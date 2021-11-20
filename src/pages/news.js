import React from 'react';  // eslint-disable-line no-unused-vars
//news list from data.json
import news from '../data/news.json';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: news,
    };
  }

  render() {
    console.log(this.state.news);
    return (
      <div>
        <div className="news-list">
        { 
          this.state.news.map((news, index) =>
            <div className="news-item" key={index}>
              <div className="news-item-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-item-content">
                <h3 className="news-item-title">{news.title}</h3>
                <p className="news-item-description">{news.description}</p>
                <p className="news-item-date">{news.date}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
