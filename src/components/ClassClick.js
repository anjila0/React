import React, { Component } from "react";

class ClassClick extends Component {
  clickHandlerdler() {
    console.log("clicked the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>ClickMe</button>
      </div>
    );
  }
}

export default ClassClick;
