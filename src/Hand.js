import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component {
  render() {
    return (
      <div className="Hand card-group">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Hand;
