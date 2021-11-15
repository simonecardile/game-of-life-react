import React from "react";
import ReactDOM from "react-dom";

import { Game as GameOfLife } from "./GameOfLife/Game.js";

import "./GameOfLife/main.css";

const App = () => (
  <GameOfLife
    title="Game of Life"
    rows={100}
    cols={100}
    evolutionSpeed={1000}
  />
);

export default App;
