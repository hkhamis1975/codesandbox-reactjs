import { Component } from "react";

class Resume extends Component {
  render() {
    const { name, lastname } = this.props;
    return (
      <h1>
        Resume.js: {name} {lastname}
      </h1>
    );
  }
}

export default Resume;
