import React from "react";
import ReactDOM from "react-dom";

import Table from "react-bootstrap/Table";

import Cell from "./Cell.js";

export class World extends React.Component {
  renderCell(row, col) {
    return (
      <Cell
        key={row + "_" + col}
        row={row}
        col={col}
        alive={this.props.generation[row][col]}
        onClick={() => this.props.onCellClick(row, col)}
      />
    );
  }

  renderCols(row) {
    return Array.from({ length: this.props.cols }).map((_, col) =>
      this.renderCell(row, col)
    );
  }

  renderRows() {
    return Array.from({ length: this.props.rows }).map((_, row) => (
      <tr key={row} id={row}>
        {this.renderCols(row)}
      </tr>
    ));
  }

  renderBody() {
    return <tbody key="worldTbody">{this.renderRows()}</tbody>;
  }

  render() {
    return (
      <Table responsive id="world">
        {this.renderBody()}
      </Table>
    );
  }
}

export default World;
