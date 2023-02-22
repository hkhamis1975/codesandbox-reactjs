import { Component } from "react";

class ClassEvent extends Component {
  handleEvent() {
    console.log("ClassEvent.js: Clicked");
  }
  render() {
    return (
      <div>
        <h2>ClassEvent.js: Class Component</h2>
        <button onClick={this.handleEvent}>Click</button>
      </div>
    );
  }
}

export default ClassEvent;
