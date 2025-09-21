import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/others/Header";
import TicTacToe from "./components/games/TicTacToe";
import Hangman from "./components/games/Hangman";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />

          {/* GAMES */}
          <Route element={<TicTacToe />} path="/game/TicTacToe" />
          <Route element={<Hangman />} path="/game/Hangman" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
