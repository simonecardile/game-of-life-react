import React from "react";
import ReactDOM from "react-dom";

import Table from "react-bootstrap/Table";

import World from "./World.js";

export class Game extends React.Component {
  render() {
    return (
      <Table responsive id="world">
        <World rows="5" cols="5" />
      </Table>
    );
  }
}

export default Game;
