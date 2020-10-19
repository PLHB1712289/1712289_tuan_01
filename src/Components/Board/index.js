import React from "react";
import "../../style.css";

import Square from "../Square";
import { MAX_SQUARE_IN_LINE } from "../../Resource/CONST";

// Component Board

const Board = ({ squares, onClick, highlight }) => {
  // <Helper function>
  // Helper 1: render square
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        isHighlight={highlight[i]}
      />
    );
  };
  // </Helper function>

  // Helper render board
  const board = [];
  for (let i = 0; i < MAX_SQUARE_IN_LINE; i++) {
    const squareInLine = [];
    for (let j = 0; j < MAX_SQUARE_IN_LINE; j++) {
      squareInLine.push(renderSquare(i * MAX_SQUARE_IN_LINE + j));
    }

    board.push(<div className="board-row">{squareInLine}</div>);
  }

  return <div className="board">{board}</div>;
};

export default Board;
