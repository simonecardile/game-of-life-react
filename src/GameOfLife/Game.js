import React from "react";
import ReactDOM from "react-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import World from "./World.js";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 40,
      cols: 40,
      evolutionSpeed: 500,
      evolution: false,
    };
  }
  startStop() {
    this.setState({
      evolution: !this.state.evolution,
    });
  }
  render() {
    return (
      <Container>
        <Button
          type="button"
          variant="primary"
          onClick={() => this.startStop()}
        >
          {this.state.evolution ? "Stop" : "Start"}
        </Button>
        <Table responsive id="world">
          <World
            rows={this.state.rows}
            cols={this.state.cols}
            evolutionSpeed={this.state.evolutionSpeed}
            evolution={this.state.evolution}
          />
        </Table>
      </Container>
    );
  }
}

export default Game;
