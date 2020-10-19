import React from "react";

// Component Moves

const Moves = ({ history, sortOption, current, onClickItem }) => {
  // Clone history
  const historyTemp = history.slice();

  // Sort history with sortOption [none, acending, decending]=[0, 1, -1]
  historyTemp.sort((a, b) => {
    if (a.location === -1 || b.location === -1) return 0;

    if (a.location > b.location) return 1 * sortOption;

    if (a.location < b.location) return -1 * sortOption;

    return 0;
  });

  // create list items move
  const listMoves = historyTemp.map((step, move) => {
    const { location, turn } = step;
    const _step = step.step;

    const desc = move
      ? `Go to move #${_step}, location: (${~~(location / 3) + 1}, ${
          (location % 3) + 1
        }), player: ${turn}`
      : "Go to game start";

    if (_step !== current) {
      return (
        <li key={_step}>
          <button onClick={() => onClickItem(_step)}>{desc}</button>
        </li>
      );
    } else {
      return (
        <li key={_step}>
          <button
            onClick={() => onClickItem(_step)}
            style={{ backgroundColor: "green" }}
          >
            {desc}
          </button>
        </li>
      );
    }
  });

  // return result
  return <ol> {listMoves} </ol>;
};

export default Moves;
