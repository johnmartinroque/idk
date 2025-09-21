import React from "react";
import TicTacToe from "../components/games/TicTacToe";
import JoinLobby from "../components/JoinLobby";
import SocketTest from "../components/SocketTest";

function Home() {
  return (
    <div className="flex justify-center">
      <h1>
        <JoinLobby />
        <SocketTest />
      </h1>
    </div>
  );
}

export default Home;
