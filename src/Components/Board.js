import React, { useState } from "react";
import "../App.css";
import Square from "./Square";

// <function helper>
const calculateWinner = (squares) => {
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};
// </function helper>

const Board = () => {
  // State
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [status, setStatus] = useState("Next player: X");

  // <Helper function>
  // Helper 1: Handle click square
  const handleClick = (i) => {
    //check winner
    if (winner) {
      alert("Choose new game");
      return;
    }

    //clone squares
    const squaresTemp = squares.slice();

    //change value state squares if possbile
    if (!squaresTemp[i]) {
      isXTurn ? (squaresTemp[i] = "X") : (squaresTemp[i] = "O");

      //calculate winner
      const winPlayer = calculateWinner(squaresTemp);

      //update state isXTurn, squares, winner, status
      setIsXTurn(!isXTurn);
      setSquares(squaresTemp);
      setWinner(winPlayer);
      winPlayer
        ? setStatus(`Winner: ${winPlayer}`)
        : setStatus(`Next player: ${isXTurn ? "O" : "X"}`);
    } else {
      //alert error
      alert(`Square ${i} already has a value!!`);
    }
  };

  // Helper 2: create new game
  const newGame = () => {
    alert(`New Game?`);
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
    setStatus("Next player: X");
  };

  // Helper 3: render square
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  // </Helper function>

  return (
    <div>
      {winner ? <button onClick={() => newGame()}>New Game</button> : ""}
      <div className="status">{status}</div>

      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
