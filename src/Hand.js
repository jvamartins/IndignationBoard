import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component {
  render() {
    return (
      <div className="Hand card-group">
        <h2>{this.props.title}</h2>
        {this.props.list.map((card) => (
          <Card name={card.name} score={card.score} />
        ))}
      </div>
    );
  }
}

export default Hand;
