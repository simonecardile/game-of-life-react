import React from "react";
import ReactDOM from "react-dom";

import { Game as GameOfLife } from "./GameOfLife/Game.js";

import "./App.css";

const App = () => (
  <GameOfLife title="Game of Life" rows={40} cols={40} evolutionSpeed={500} />
);

export default App;
