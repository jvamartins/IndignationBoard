import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src="..." alt="..." className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">text</p>
        </div>
      </div>
    );
  }
}

export default Card;
