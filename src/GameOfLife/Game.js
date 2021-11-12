import React from "react";
import ReactDOM from "react-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  reset() {
    console.log("reset");
    this.setState({
      evolution: false,
    });
  }
  render() {
    return (
      <Container>
        <h1>Game of Life</h1>
        <Row className="text-center mt-2">
          <Col>
            <Button
              as="input"
              type="button"
              variant="primary"
              onClick={() => this.startStop()}
              value={
                this.state.evolution ? "Stop Reproducing" : "Start Reproducing"
              }
            />
          </Col>
          <Col>
            <Button
              as="input"
              type="button"
              variant="secondary"
              onClick={() => this.reset()}
              value="Reset World"
            />
          </Col>
        </Row>
        <Table responsive id="world" className="mt-3">
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
