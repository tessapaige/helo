import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  console.log(props);
  return (
    <div>
      <img src={props.pic} alt="" />
      <p> Hello, {props.username}</p>
      <br />
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/post/post:id">
        <button>New Post</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    username: state.username,
    pic: state.pic
  };
}

export default connect(mapStateToProps)(Nav);
