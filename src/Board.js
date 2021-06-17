import React, { Component } from "react";
import Hand from "./Hand";
import { nanoid } from "nanoid";
import audio from "./skyrim_level_up.mp3";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tses: this.getTSES(),
      cses: this.getCSES(),
      leadership: this.getLeadership(),
    };
    this.increaseIndignation = this.increaseIndignation.bind(this);
  }

  increaseIndignationByOne(id, list) {
    let newList = list.map((person) => {
      if (id === person.id) {
        person.score += 1;
      }
      return person;
    });
    return newList;
  }

  increaseIndignation(id, type) {
    if (type === "TSE") {
      let newTSEs = this.increaseIndignationByOne(id, this.state.tses);
      this.setState({
        ...this.state,
        tses: newTSEs,
      });
      localStorage.setItem("tses", JSON.stringify(newTSEs));
    } else if (type === "CSE") {
      let newCSEs = this.increaseIndignationByOne(id, this.state.cses);
      this.setState({
        ...this.state,
        tses: newCSEs,
      });
      localStorage.setItem("cses", JSON.stringify(newCSEs));
    } else {
      let newLeadership = this.increaseIndignationByOne(
        id,
        this.state.leadership
      );
      this.setState({
        ...this.state,
        leadership: newLeadership,
      });
      localStorage.setItem("leadership", JSON.stringify(newLeadership));
    }
    new Audio(audio).play();
  }

  getTSES() {
    if (localStorage.getItem("tses") === null) {
      let tses = [
        { id: nanoid(), name: "JVM", score: 0, type: "TSE" },
        { id: nanoid(), name: "Lino", score: 0, type: "TSE" },
        { id: nanoid(), name: "Jesus", score: 0, type: "TSE" },
        { id: nanoid(), name: "Cleyman", score: 0, type: "TSE" },
        { id: nanoid(), name: "Richard", score: 0, type: "TSE" },
      ];
      localStorage.setItem("tses", JSON.stringify(tses));
      return tses;
    } else {
      return JSON.parse(localStorage.getItem("tses"));
    }
  }

  getCSES() {
    if (localStorage.getItem("cses") === null) {
      let cses = [
        { id: nanoid(), name: "Alfs", score: 0, type: "CSE" },
        { id: nanoid(), name: "Giuli", score: 0, type: "CSE" },
        { id: nanoid(), name: "Jams", score: 0, type: "CSE" },
        { id: nanoid(), name: "Marcos", score: 0, type: "CSE" },
        { id: nanoid(), name: "Mats", score: 0, type: "CSE" },
        { id: nanoid(), name: "Migs", score: 0, type: "CSE" },
        { id: nanoid(), name: "Rafa", score: 0, type: "CSE" },
      ];
      localStorage.setItem("cses", JSON.stringify(cses));
      return cses;
    } else {
      return JSON.parse(localStorage.getItem("cses"));
    }
  }

  getLeadership() {
    if (localStorage.getItem("leadership") === null) {
      let leadership = [
        { id: nanoid(), name: "Benner", score: 0, type: "LEADERSHIP" },
        { id: nanoid(), name: "Guga", score: 0, type: "LEADERSHIP" },
        { id: nanoid(), name: "Carlos", score: 0, type: "LEADERSHIP" },
        { id: nanoid(), name: "Marcel", score: 0, type: "LEADERSHIP" },
      ];
      localStorage.setItem("leadership", JSON.stringify(leadership));
      return leadership;
    } else {
      return JSON.parse(localStorage.getItem("leadership"));
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
          increaseIndignation={this.increaseIndignation}
        />
        <Hand
          title="CSEs"
          list={this.state.cses}
          totalScore={this.calculateScore(this.state.cses)}
          increaseIndignation={this.increaseIndignation}
        />
        <Hand
          title="LEADERSHIP"
          list={this.state.leadership}
          totalScore={this.calculateScore(this.state.leadership)}
          increaseIndignation={this.increaseIndignation}
        />
      </div>
    );
  }
}

export default Board;
