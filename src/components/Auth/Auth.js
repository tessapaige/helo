import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { displayUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  handleUser(e) {
    this.setState({ username: e });
  }
  handlePass(e) {
    this.setState({ password: e });
  }

  register() {
    const { username, password } = this.state;

    axios.post("/api/register", { username, password });
    this.props.history.push("/dashboard");
    this.props.displayUser();
  }

  login() {
    const { username, password } = this.state;

    axios.post("/api/login", { username, password });
    this.props.history.push("/dashboard");
    this.props.displayUser();
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleUser(e.target.value)}
          type="text"
          value={this.state.username}
        />
        <input
          onChange={e => this.handlePass(e.target.value)}
          type="password"
          value={this.state.password}
        />
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default connect(
  null,
  { displayUser }
)(Auth);
