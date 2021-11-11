import React from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";

import Game from "./GameOfLife/Game.js";

import "./App.css";

const App = () => (
  <Container>
    <Game />
  </Container>
);

export default App;
