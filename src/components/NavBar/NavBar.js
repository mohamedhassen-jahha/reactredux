import React, { Component } from "react";
import "./NavBar.css";
export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <h1 className="navBar_logo">TODO APP WITH REDUX</h1>
        <h2 className="navBar_slogan">KEEP YOU Focus on your projects</h2>
      </div>
    );
  }
}
