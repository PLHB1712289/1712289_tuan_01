import React from "react";
import "../style.css";
import Square from "./Square";

const Board = ({ squares, onClick, highlight }) => {

  // <Helper function>
  // Helper 1: render square
  const renderSquare = (i) => {
    return <Square key={i} value={squares[i]} onClick={() => onClick(i)} isHighlight={highlight[i]} />;
  };
  // </Helper function>

  const listSquares = [];
  for (let i = 0; i < 9; i++) {
    listSquares.push(renderSquare(i));
  }

  return (
    <div className="board">
      {listSquares}
    </div>
  );
};

export default Board;
