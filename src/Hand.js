import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>Total Score: {this.props.totalScore}</h3>
        <div className="Hand card-group">
          {this.props.list.map((card) => (
            <Card name={card.name} score={card.score} />
          ))}
        </div>
      </div>
    );
  }
}

export default Hand;
