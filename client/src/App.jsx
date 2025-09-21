import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/others/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
