import React, { Component } from "react";
import Hand from "./Hand";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tses: this.getTSES(),
      cses: this.getCSES(),
      leadership: this.getLeadership(),
    };
  }

  getTSES() {}

  getCSES() {}

  getLeadership() {}

  render() {
    return (
      <div className="Board">
        <h1>Indignation Board, MADAFACKAS</h1>
        <Hand title="TSEs" />
        <Hand title="CSEs" />
        <Hand title="LEADERSHIP" />
      </div>
    );
  }
}

export default Board;
