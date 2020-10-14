import React from "react";

const Moves = ({ history, sortOption, current, onClickItem }) => {
  const historyTemp = history.slice();
  historyTemp.sort((a, b) => {
    if (a.location === -1 || b.location === -1)
      return 0;

    if (a.location > b.location)
      return 1 * sortOption;

    if (a.location < b.location)
      return -1 * sortOption;

    return 0;
  });

  const listMoves = historyTemp.map((step, move) => {
    const { location, turn } = step;
    const _step = step.step;

    const
      desc = move
        ? `Go to move #${_step} - ${location}, location: (${~~(location / 3) + 1}, ${location % 3 + 1}), player: ${turn}`
        : "Go to game start";
    return (

      _step !== current ?
        <li key={_step}>
          <button onClick={() => onClickItem(_step)}>{desc}</button>
        </li>
        :
        <li key={_step}>
          <button onClick={() => onClickItem(_step)} style={{ backgroundColor: "green" }}>{desc}</button>
        </li>
    );
  });

  return <ol> {listMoves} </ol>;
}


export default Moves;