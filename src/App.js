import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tutorial2 from "./Tutorial2.js";

class App extends Component {
  // component is to make it a react Component
  state = {
    itemList: ["task1", "task2"],
    taskTitle: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      // this refers to this context
      itemList: this.state.itemList.concat(this.state.taskTitle) // concat generates a new array
    });

    // console.log(event.target['name'].value)
    // console.log(event.target.form)
    // console.log(event.target.form["name"].value)
  };

  handleOnchange = event => {
    this.setState({
      taskTitle: event.target.value
    });
  };

  render() {
    // render will be shown in brower, written in HTML
    console.log(this.state);

    // returns only ONE root item
    return (
      <div
        style={{
          background: "#FAEBD7",
          padding: "40px"
        }}
      >
        <form onSubmit={this.handleSubmit}>
          {/*
              onSubmit listener, all javascript in HTML code has to be in {...} functions cannot be written in inbeded javascript, has to be written outside and called

              {
                this.state.correct ? (
                  <Victory />
                ) : (
                  <Lose />
                )
              }
            */}
          <label>
            Add item to list:
          </label>
          <input
            type="text"
            name="name"
            value={this.state.taskTitle}
            onChange={this.handleOnchange}
          />
          {" "}
          {/*onChange listener*/}
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.itemList.map(function(item, index) {
            //map https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>

        <div>
          {/*
            Create two buttons. Both with random colour and text in middle. If player clicks button with matching colour and text, win. Else lose.
          */}
          <Tutorial2 /> {/* Calls Tutorial2.js */}
        </div>
      </div>
    );
  }
}

export default App;
