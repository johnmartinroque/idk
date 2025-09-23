import React from "react";
import { useNavigate } from "react-router-dom";

function Games() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl">Games</h1>
        <div>
          <button
            onClick={() => navigate("/game/Hangman")}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Hangman
          </button>
        </div>
        <div>
          {" "}
          <button
            onClick={() => navigate("/game/TicTacToe")}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            TicTacToe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Games;
