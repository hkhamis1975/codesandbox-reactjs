import { Component } from "react";

class Message extends Component {
  render() {
    return <h1>Message.js: {this.props.name} Message from Class Component</h1>;
  }
}

export default Message;
