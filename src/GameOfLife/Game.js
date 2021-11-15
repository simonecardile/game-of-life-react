import React from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";

import Header from "./Header.js";
import Toolbar from "./Toolbar.js";
import World from "./World.js";
import SettingsModal from "./SettingsModal.js";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows,
      cols: this.props.cols,
      generation: this.createGenerationArray(this.props.rows, this.props.cols),
      evolution: false,
      evolutionSpeed: this.props.evolutionSpeed,
      showSettings: false,
    };
    this.timer = false;
  }

  createGenerationArray(rows, cols) {
    let generationArray = new Array(rows);
    for (let row = 0; row < generationArray.length; row++) {
      generationArray[row] = new Array(cols);
      for (let col = 0; col < generationArray[row].length; col++) {
        generationArray[row][col] = Math.round(Math.random() * 1); // 0
      }
    }
    return generationArray;
  }

  getNeighborCount(row, col) {
    let count = 0;
    let nrow = Number(row);
    let ncol = Number(col);
    // SE NO prima riga
    if (nrow - 1 >= 0) {
      // Check cella sopra
      if (this.state.generation[nrow - 1][ncol] == 1) {
        count++;
      }
      // SE NO prima colonna
      if (ncol - 1 >= 0) {
        // Check cella in alto sinistra
        if (this.state.generation[nrow - 1][ncol - 1] == 1) {
          count++;
        }
      }
      // SE NO ultima colonna
      if (ncol + 1 < this.state.cols) {
        // Check cella in alto a destra
        if (this.state.generation[nrow - 1][ncol + 1] == 1) {
          count++;
        }
      }
    }
    // SE NO ultima riga
    if (nrow + 1 < this.state.rows) {
      // Check cella sotto
      if (this.state.generation[nrow + 1][ncol] == 1) {
        count++;
      }
      // SE NO prima colonna
      if (ncol - 1 >= 0) {
        // Check cella in basso a sinistra
        if (this.state.generation[nrow + 1][ncol - 1] == 1) {
          count++;
        }
      }
      // SE NO ultima colonna
      if (ncol + 1 < this.state.cols) {
        // Check cella in basso a destra
        if (this.state.generation[nrow + 1][ncol + 1] == 1) {
          count++;
        }
      }
    }
    // SE NO prima colonna
    if (ncol - 1 >= 0) {
      // Check cella a sinistra
      if (this.state.generation[nrow][ncol - 1] == 1) {
        count++;
      }
    }
    // SE NO ultima colonna
    if (ncol + 1 < this.state.cols) {
      // Check cella a destra
      if (this.state.generation[nrow][ncol + 1] == 1) {
        count++;
      }
    }
    return count;
  }

  evolve() {
    // Next generation
    let nextGeneration = this.createGenerationArray(
      this.state.rows,
      this.state.cols
    );
    // Applicazione delle regole
    for (let row in nextGeneration) {
      for (let col in nextGeneration[row]) {
        let neighbors = this.getNeighborCount(row, col);
        // Regole
        if (this.state.generation[row][col] == 1) {
          // SE la cella è viva
          if (neighbors < 2) {
            nextGeneration[row][col] = 0;
          } else if (neighbors == 2 || neighbors == 3) {
            nextGeneration[row][col] = 1;
          } else if (neighbors > 3) {
            nextGeneration[row][col] = 0;
          }
        } else if (this.state.generation[row][col] == 0) {
          // SE la cella è morta
          if (neighbors == 3) {
            nextGeneration[row][col] = 1;
          }
        }
      }
    }
    if (this.state.evolution) {
      this.timer = setTimeout(
        () =>
          this.setState({
            // Aggiornamento della generazione corrente sulla base della nuova
            generation: nextGeneration,
          }),
        this.state.evolutionSpeed
      );
    }
  }
  startStop() {
    this.setState({
      evolution: !this.state.evolution,
    });
  }
  cellClick(row, col) {
    let generation = this.state.generation;
    generation[row][col] = this.state.generation[row][col] == 1 ? 0 : 1;
    this.setState({
      generation: generation,
    });
  }
  reset() {
    this.setState({
      evolution: false,
      generation: null,
    });
  }
  toggleSettings() {
    this.setState({
      showSettings: !this.state.showSettings,
    });
  }
  handleChangeSetting(event) {
    let newState = this.state;
    newState[event.target.name] = Number(event.target.value);
    newState.generation = this.createGenerationArray(
      newState.rows,
      newState.cols
    );
    newState.evolution = false;
    this.setState(newState);
  }
  render() {
    if (this.state.evolution) {
      this.evolve();
    } else {
      clearTimeout(this.timer);
    }
    return (
      <Container>
        <Header text={this.props.title} />
        <Toolbar
          evolution={this.state.evolution}
          startStop={() => this.startStop()}
          reset={() => this.reset()}
          toggleSettings={() => this.toggleSettings()}
        />
        <World
          rows={this.state.rows}
          cols={this.state.cols}
          generation={this.state.generation}
          evolution={this.state.evolution}
          evolutionSpeed={this.state.evolutionSpeed}
          onCellClick={(row, col) => this.cellClick(row, col)}
        />
        <SettingsModal
          show={this.state.showSettings}
          onHide={() => this.toggleSettings()}
          rows={this.state.rows}
          cols={this.state.cols}
          evolutionSpeed={this.state.evolutionSpeed}
          changeSetting={(event) => this.handleChangeSetting(event)}
        />
      </Container>
    );
  }
}

export default Game;
