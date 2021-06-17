import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleIncreaseIndignation = this.handleIncreaseIndignation.bind(this);
  }

  handleIncreaseIndignation() {
    this.props.increaseIndignation(this.props.id, this.props.type);
  }

  render() {
    let path = require(`./photos/${this.props.name.toLowerCase()}.png`).default;
    return (
      <div className="card" onClick={this.handleIncreaseIndignation}>
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
