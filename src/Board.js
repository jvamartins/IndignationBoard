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

  getTSES() {
    if (localStorage.getItem("tses") === null) {
      return [
        { name: "JVM", score: 0 },
        { name: "Lino", score: 0 },
        { name: "Jesus", score: 0 },
        { name: "Cleyman", score: 0 },
        { name: "Richard", score: 0 },
      ];
    } else {
      return JSON.parse(localStorage.getItem("tses"));
    }
  }

  getCSES() {
    if (localStorage.getItem("cses") === null) {
      return [
        { name: "Alfs", score: 0 },
        { name: "Giuli", score: 0 },
        { name: "Jams", score: 0 },
        { name: "Marcos", score: 0 },
        { name: "Mats", score: 0 },
        { name: "Migs", score: 0 },
        { name: "Rafa", score: 0 },
      ];
    } else {
      return JSON.parse(localStorage.getItem("tses"));
    }
  }

  getLeadership() {
    if (localStorage.getItem("leadership") === null) {
      return [
        { name: "Benner", score: 0 },
        { name: "Guga", score: 0 },
        { name: "Carlos", score: 0 },
        { name: "Marcel", score: 0 },
      ];
    } else {
      return JSON.parse(localStorage.getItem("tses"));
    }
  }

  calculateScore(list) {
    let sum = list.reduce((acc, curr) => {
      return acc + curr.score;
    }, 0);
    return sum;
  }

  render() {
    return (
      <div className="Board">
        <h1>Indignation Board, MADAFACKAS</h1>
        <Hand
          title="TSEs"
          list={this.state.tses}
          totalScore={this.calculateScore(this.state.tses)}
        />
        <Hand
          title="CSEs"
          list={this.state.cses}
          totalScore={this.calculateScore(this.state.cses)}
        />
        <Hand
          title="LEADERSHIP"
          list={this.state.leadership}
          totalScore={this.calculateScore(this.state.leadership)}
        />
      </div>
    );
  }
}

export default Board;
