import React, { useState } from "react";
import "../App.css";
import Square from "./Square";

const Board = () => {
  // State
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // Helper function
  const handleClick = (i) => {
    //clone squares
    const squaresTemp = squares.slice();

    //change value state squares
    if (!squaresTemp[i]) {
      isXTurn ? (squaresTemp[i] = "X") : (squaresTemp[i] = "O");

      //update state
      setIsXTurn(!isXTurn);
      setSquares(squaresTemp);
    } else {
      //alert error
      alert(`Square ${i} already has a value!!`);
    }
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">Next player: {isXTurn ? "X" : "O"}</div>
      <div className="board-row">
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </div>
  );
};

export default Board;
