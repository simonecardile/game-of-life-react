import React from "react";
import ReactDOM from "react-dom";

import Cell from "./Cell.js";

export class World extends React.Component {
  constructor(props) {
    super(props);
    this.currGen = [this.props.rows];
    this.nextGen = [this.props.rows];
    for (let i = 0; i < this.props.rows; i++) {
      this.currGen[i] = [this.props.cols];
      this.nextGen[i] = [this.props.cols];
    }
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        this.currGen[i][j] = 0;
        this.nextGen[i][j] = 0;
      }
    }
  }
  cellClick(row, col) {
    if (this.currGen[row][col] == 0) {
      this.currGen[row][col] = 1;
    } else {
      this.currGen[row][col] = 0;
    }
    // Perchè se non uso forceUpdate non si aggiornano le celle?
    this.forceUpdate();
  }
  renderCell(i, j) {
    return (
      <Cell
        key={i + "_" + j}
        row={i}
        col={j}
        state={this.currGen[i][j]}
        onClick={() => this.cellClick(i, j)}
      />
    );
  }
  render() {
    return (
      <tbody key="worldTbody">
        {Array.from({ length: this.props.rows }).map((_, i) => (
          <tr key={i} id={i}>
            {Array.from({ length: this.props.cols }).map((_, j) =>
              this.renderCell(i, j)
            )}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default World;
