import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>Total Score: {this.props.totalScore}</h3>
        <div className="Hand card-group">
          {this.props.list.map((person) => (
            <Card
              key={person.id}
              id={person.id}
              name={person.name}
              type={person.type}
              score={person.score}
              increaseIndignation={this.props.increaseIndignation}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Hand;
