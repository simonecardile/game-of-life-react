import React from "react";
import ReactDOM from "react-dom";

import Cell from "./Cell.js";

export class World extends React.Component {
  constructor(props) {
    super(props);
    this.timer = false;
    this.state = {
      currGen: this.createGenArray(),
      nextGen: this.createGenArray(),
    };
  }

  createGenArray() {
    let genArray = new Array(this.props.rows);
    for (let i = 0; i < genArray.length; i++) {
      genArray[i] = new Array(this.props.cols);
      for (let j = 0; j < genArray[i].length; j++) {
        genArray[i][j] = 0;
      }
    }
    return genArray;
  }

  cellClick(row, col) {
    let currGen = this.state.currGen;
    currGen[row][col] = this.state.currGen[row][col] == 1 ? 0 : 1;
    this.setState({ currGen: currGen });
  }

  getNeighborCount(row, col) {
    let count = 0;
    let nrow = Number(row);
    let ncol = Number(col);
    // SE NO prima riga
    if (nrow - 1 >= 0) {
      // Check cella sopra
      if (this.state.currGen[nrow - 1][ncol] == 1) {
        count++;
      }
      // SE NO prima colonna
      if (ncol - 1 >= 0) {
        // Check cella in alto sinistra
        if (this.state.currGen[nrow - 1][ncol - 1] == 1) {
          count++;
        }
      }
      // SE NO ultima colonna
      if (ncol + 1 < this.props.cols) {
        // Check cella in alto a destra
        if (this.state.currGen[nrow - 1][ncol + 1] == 1) {
          count++;
        }
      }
    }
    // SE NO ultima riga
    if (nrow + 1 < this.props.rows) {
      // Check cella sotto
      if (this.state.currGen[nrow + 1][ncol] == 1) {
        count++;
      }
      // SE NO prima colonna
      if (ncol - 1 >= 0) {
        // Check cella in basso a sinistra
        if (this.state.currGen[nrow + 1][ncol - 1] == 1) {
          count++;
        }
      }
      // SE NO ultima colonna
      if (ncol + 1 < this.props.cols) {
        // Check cella in basso a destra
        if (this.state.currGen[nrow + 1][ncol + 1] == 1) {
          count++;
        }
      }
    }
    // SE NO prima colonna
    if (ncol - 1 >= 0) {
      // Check cella a sinistra
      if (this.state.currGen[nrow][ncol - 1] == 1) {
        count++;
      }
    }
    // SE NO ultima colonna
    if (ncol + 1 < this.props.cols) {
      // Check cella a destra
      if (this.state.currGen[nrow][ncol + 1] == 1) {
        count++;
      }
    }
    return count;
  }

  evolve() {
    let currGen = this.state.currGen;
    let nextGen = this.state.nextGen;
    // Applicazione delle regole
    for (let row in this.state.currGen) {
      for (let col in this.state.currGen[row]) {
        let neighbors = this.getNeighborCount(row, col);
        // Regole
        if (this.state.currGen[row][col] == 1) {
          // SE la cella è viva
          if (neighbors < 2) {
            nextGen[row][col] = 0;
          } else if (neighbors == 2 || neighbors == 3) {
            nextGen[row][col] = 1;
          } else if (neighbors > 3) {
            nextGen[row][col] = 0;
          }
        } else if (this.state.currGen[row][col] == 0) {
          // SE la cella è morta
          if (neighbors == 3) {
            nextGen[row][col] = 1;
          }
        }
      }
    }
    // Aggiornamento della generazione corrente sulla base della nuova
    for (let row in currGen) {
      for (let col in currGen[row]) {
        // Aggiornamento la generazione corrente con i dati della nuova
        currGen[row][col] = nextGen[row][col];
        // Reset della nuova generazione
        nextGen[row][col] = 0;
      }
    }
    this.timer = setTimeout(
      () => this.setState({ currGen: currGen, nextGen: nextGen }), // Perché così funziona?
      this.props.evolutionSpeed
    );
  }

  renderCell(row, col) {
    return (
      <Cell
        key={row + "_" + col}
        row={row}
        col={col}
        alive={this.state.currGen[row][col]}
        onClick={() => this.cellClick(row, col)}
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

  render() {
    if (this.props.evolution) {
      this.evolve();
    }
    return <tbody key="worldTbody">{this.renderRows()}</tbody>;
  }
}

export default World;
