import React, { useState } from "react";
import "../../style.css";
import Board from "../Board";
import Moves from "../Moves";

import FLAGSORT from "../../Resource/FLAGSORT";
import calculateWinner from "./service";

// Component Game

const Game = () => {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), location: -1, turn: "X", step: 0 },
  ]);
  const [highlight, setHighlight] = useState(Array(9).fill(false));
  const [current, setCurrent] = useState(0);
  const [sortOption, setSortOption] = useState(FLAGSORT.DEFAULT);

  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [status, setStatus] = useState("Next player: X");

  // <Helper function>

  // Helper 1: Handle click square
  const handleClick = (i) => {
    console.log(`Current: ${current}`);
    //check winner
    if (winner) {
      alert("Choose new game");
      return;
    }

    let historyTemp = [];
    if (current !== history.length - 1) {
      historyTemp = history.slice(0, current + 1);
    } else {
      historyTemp = history.slice();
    }

    //clone history & squares
    const squaresTemp = historyTemp[current].squares.slice();

    //change value state squares if possbile
    if (!squaresTemp[i]) {
      isXTurn ? (squaresTemp[i] = "X") : (squaresTemp[i] = "O");

      //calculate winner
      const winPlayer = calculateWinner(squaresTemp);

      const newHighlight = Array(9).fill(false);
      //update state isXTurn, history, winner, status
      setIsXTurn(!isXTurn);
      setHistory(
        historyTemp.concat([
          {
            squares: squaresTemp,
            location: i,
            turn: isXTurn ? "X" : "O",
            step: current + 1,
          },
        ])
      );
      setCurrent(historyTemp.length);
      setWinner(winPlayer);
      if (winPlayer) {
        if (winPlayer !== true) {
          setStatus(`Winner: ${winPlayer.winner}`);

          newHighlight[winPlayer.lines[0]] = true;
          newHighlight[winPlayer.lines[1]] = true;
          newHighlight[winPlayer.lines[2]] = true;
        } else {
          setStatus(`Draw`);
        }
      } else {
        setStatus(`Next player: ${isXTurn ? "O" : "X"}`);
        newHighlight[i] = true;
      }

      setHighlight(newHighlight);
    } else {
      //alert error
      alert(`Square ${i} already has a value!!`);
    }
  };

  // Helper 2: create new game
  const newGame = () => {
    alert(`New Game?`);
    setHistory([
      { squares: Array(9).fill(null), location: -1, turn: "X", step: 0 },
    ]);
    setHighlight(Array(9).fill(false));
    setIsXTurn(true);
    setWinner(null);
    setCurrent(0);
    setStatus("Next player: X");
  };

  // Helper 3: jump
  const jumpTo = (move) => {
    const newHighlight = Array(9).fill(false);
    newHighlight[history[move].location] = true;
    setHighlight(newHighlight);

    setCurrent(move);
    setIsXTurn(move % 2 === 0);
    setStatus(`Next player: ${move % 2 === 0 ? "X" : "O"}`);
  };

  // Helper 4: handle click button sort
  const handleClickSort = () => {
    switch (sortOption) {
      case FLAGSORT.DEFAULT:
        setSortOption(FLAGSORT.ACENDING);
        break;

      case FLAGSORT.ACENDING:
        setSortOption(FLAGSORT.DECENDING);
        break;

      case FLAGSORT.DECENDING:
        setSortOption(FLAGSORT.DEFAULT);
        break;

      default:
        break;
    }
  };
  // </Helper function>

  const sortTag = ["DECENDING", "None", "ACENDING"];
  const colorSortTag = ["green", "white", "yellow"];

  return (
    <div className="game">
      <div className="game-board">
        <Board
          onClick={handleClick}
          squares={history[current].squares}
          highlight={highlight}
        />
      </div>
      <div className="game-info">
        <div className="status">
          <div>{status}</div>
          <div>
            <span>Sort:</span>
            <button
              style={{ backgroundColor: `${colorSortTag[sortOption + 1]}` }}
              onClick={() => {
                handleClickSort();
              }}
            >
              {sortTag[sortOption + 1]}
            </button>
          </div>
          <br />
          <div>
            {winner ? <button onClick={() => newGame()}>New Game</button> : ""}
          </div>
        </div>

        <Moves
          history={history}
          sortOption={sortOption}
          current={current}
          onClickItem={jumpTo}
        />
      </div>
    </div>
  );
};

export default Game;
