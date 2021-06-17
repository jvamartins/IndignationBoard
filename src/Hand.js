import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component {
  render() {
    return (
      <div className="Hand card-group">
        <h2>{this.props.title}</h2>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Hand;
