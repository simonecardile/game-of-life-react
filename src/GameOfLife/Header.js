import React from "react";
import ReactDOM from "react-dom";

export class Header extends React.Component {
  render() {
    return <h1 className="mb-3">{this.props.text}</h1>;
  }
}

export default Header;
