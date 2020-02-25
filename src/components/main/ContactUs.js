import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleButton = e => {
    e.preventDefault();
    this.setState = {
      name: "",
      email: "",
      message: ""
    };
  };

  render() {
    return (
      <div className="ContactUs">
        <div className="cuLeftDiv">
          <div id="needReach">Need to reach us?</div>
          <div>Email: info@odegastudios.com</div>
        </div>
        <div className="cuRightDiv">
          <form id="footerForm" onSubmit={this.handleButton}>
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <textarea
              placeholder="Message"
              id="messagePH"
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
            <button onClick={this.handleButton} id="submitButton">
              Submit
            </button>
          </form>
        </div>
        <div className="circles">
          <div id="grayCircle"></div>
          <div id="blueCircle"></div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
