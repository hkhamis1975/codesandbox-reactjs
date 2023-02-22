import { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: ""
  };
  handleChange = (event) => {
    this.setState({
      firstname: event.target.value
    });
    // console.log(this.state.firstname);
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value
    });
    //   console.log(this.state.lastname);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fname: this.state.firstname,
      lname: this.state.lastname
    });
    this.setState({
      firstname: "",
      lastname: ""
    });
  };
  render() {
    return (
      <div>
        <h1>Form.js: Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.firstname}
          ></input>
          <input
            type="text"
            onChange={this.handleLastNameChange}
            value={this.state.lastname}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
