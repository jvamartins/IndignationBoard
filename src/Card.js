import React, { Component } from "react";

class Card extends Component {
  render() {
    let path = "";
    return (
      <div className="card">
        <img src={path} alt="..." className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.score}</p>
        </div>
      </div>
    );
  }
}

export default Card;
