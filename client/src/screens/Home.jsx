import React from "react";
import TicTacToe from "../components/games/TicTacToe";
import JoinLobby from "../components/JoinLobby";

function Home() {
  return (
    <div className="flex justify-center">
      <h1>
        <JoinLobby />
      </h1>
    </div>
  );
}

export default Home;
