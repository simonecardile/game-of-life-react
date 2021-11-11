import React from "react";
import ReactDOM from "react-dom";

export class Cell extends React.Component {
  render() {
    return (
      <td
        id={this.props.row + "_" + this.props.col}
        className={this.props.state == 0 ? "dead" : "alive"}
        onClick={this.props.onClick}
      ></td>
    );
  }
}

export default Cell;
