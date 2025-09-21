import React, { useState, useEffect } from "react";

// Hangman React component using Tailwind CSS
// Default export: Hangman

const words = [
  "react",
  "tailwind",
  "javascript",
  "component",
  "developer",
  "framer",
  "typescript",
  "firebase",
  "python",
  "algorithm",
];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default function Hangman() {
  const [word, setWord] = useState(getRandomWord);
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrong = 6;

  const gameOver = wrongGuesses >= maxWrong;
  const isWinner = word.split("").every((letter) => guesses.includes(letter));

  const handleGuess = (letter) => {
    if (guesses.includes(letter) || gameOver || isWinner) return;
    setGuesses((prev) => [...prev, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuesses([]);
    setWrongGuesses(0);
  };

  const renderWord = () => {
    return word.split("").map((letter, idx) => (
      <span
        key={idx}
        className="inline-block w-6 md:w-8 border-b-2 border-gray-500 mx-1 text-center text-lg"
      >
        {guesses.includes(letter) || gameOver ? letter : ""}
      </span>
    ));
  };

  const renderKeyboard = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    return (
      <div className="grid grid-cols-9 gap-2 mt-4">
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            className={`px-2 py-1 rounded-lg text-sm font-medium shadow-sm transition-colors duration-200 ${
              guesses.includes(letter)
                ? word.includes(letter)
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-red-300 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">Hangman</h1>

      <div className="flex flex-col items-center">
        <svg height="200" width="200" className="mb-4">
          <line
            x1="20"
            y1="180"
            x2="180"
            y2="180"
            stroke="black"
            strokeWidth="4"
          />
          <line
            x1="60"
            y1="20"
            x2="60"
            y2="180"
            stroke="black"
            strokeWidth="4"
          />
          <line
            x1="60"
            y1="20"
            x2="140"
            y2="20"
            stroke="black"
            strokeWidth="4"
          />
          <line
            x1="140"
            y1="20"
            x2="140"
            y2="50"
            stroke="black"
            strokeWidth="4"
          />

          {wrongGuesses > 0 && (
            <circle
              cx="140"
              cy="70"
              r="20"
              stroke="black"
              strokeWidth="4"
              fill="none"
            />
          )}
          {wrongGuesses > 1 && (
            <line
              x1="140"
              y1="90"
              x2="140"
              y2="140"
              stroke="black"
              strokeWidth="4"
            />
          )}
          {wrongGuesses > 2 && (
            <line
              x1="140"
              y1="100"
              x2="120"
              y2="120"
              stroke="black"
              strokeWidth="4"
            />
          )}
          {wrongGuesses > 3 && (
            <line
              x1="140"
              y1="100"
              x2="160"
              y2="120"
              stroke="black"
              strokeWidth="4"
            />
          )}
          {wrongGuesses > 4 && (
            <line
              x1="140"
              y1="140"
              x2="120"
              y2="170"
              stroke="black"
              strokeWidth="4"
            />
          )}
          {wrongGuesses > 5 && (
            <line
              x1="140"
              y1="140"
              x2="160"
              y2="170"
              stroke="black"
              strokeWidth="4"
            />
          )}
        </svg>

        <div className="mb-4 text-xl tracking-wider">{renderWord()}</div>

        {renderKeyboard()}

        <div className="mt-4">
          {isWinner && (
            <div className="text-green-600 font-semibold">You Win! 🎉</div>
          )}
          {gameOver && !isWinner && (
            <div className="text-red-600 font-semibold">
              Game Over! Word was "{word}"
            </div>
          )}
        </div>

        <button
          onClick={resetGame}
          className="mt-6 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
        >
          New Game
        </button>
      </div>
    </div>
  );
}
