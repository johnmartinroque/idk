import React from "react";
import TicTacToe from "../components/games/TicTacToe";

function Home() {
  return (
    <div className="flex justify-center  bg-teal-200">
      <h1>
        <TicTacToe />
      </h1>
    </div>
  );
}

export default Home;
