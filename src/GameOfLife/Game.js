import React from "react";
import ReactDOM from "react-dom";

import Table from "react-bootstrap/Table";

import World from "./World.js";

export class Game extends React.Component {
  render() {
    const rows = 40;
    const cols = 40;
    const evolutionSpeed = 2000;
    return (
      <Table responsive id="world">
        <World rows={rows} cols={cols} evolutionSpeed={evolutionSpeed} />
      </Table>
    );
  }
}

export default Game;
