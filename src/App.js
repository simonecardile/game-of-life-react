import React from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";

import { Game as GameOfLife } from "./GameOfLife/Game.js";

import "./App.css";

const App = () => (
  <Container>
    <GameOfLife />
  </Container>
);

export default App;
