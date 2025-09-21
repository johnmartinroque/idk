import React, { useState } from "react";

export default function TicTacToe() {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  function calculateWinner(sq) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
        return sq[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);

  function handleClick(i) {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setScores((s) => ({ ...s, [newWinner]: s[newWinner] + 1 }));
    }
  }

  function resetBoard() {
    setBoard(emptyBoard);
    setXIsNext(true);
  }

  return (
    <div className="max-w-sm mx-auto my-8 p-4 bg-white rounded-lg shadow text-center">
      <h1 className="text-xl font-bold mb-2">Tic Tac Toe</h1>
      <p className="mb-4">Turn: {xIsNext ? "X" : "O"}</p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((value, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className="w-20 h-20 flex items-center justify-center text-2xl font-bold border rounded-lg hover:bg-gray-100"
          >
            {value}
          </button>
        ))}
      </div>

      <div className="mb-4">
        {winner ? (
          <p className="font-semibold text-lg">Winner: {winner}</p>
        ) : (
          <p>Make a move!</p>
        )}
      </div>

      <div className="flex justify-around mb-4">
        <div>
          <p className="font-bold">X Wins</p>
          <p>{scores.X}</p>
        </div>
        <div>
          <p className="font-bold">O Wins</p>
          <p>{scores.O}</p>
        </div>
      </div>

      <button
        onClick={resetBoard}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Restart
      </button>
    </div>
  );
}
