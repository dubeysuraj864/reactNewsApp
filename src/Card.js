import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="Card">
          <div className="img">
            <img src={this.props.news.urlToImage} alt="" />
          </div>
          <div className="bottom">
            <div className="title">{this.props.news.title}<a className="readmore" href={this.props.news.url}>   readmore</a></div>
        
          </div>
        </div>
      </>
    );
  }
}

export default Card;
