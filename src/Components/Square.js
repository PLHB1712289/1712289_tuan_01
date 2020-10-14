import React from "react";
import "../style.css";

const Square = ({ value, onClick, isHighlight }) => {
  return (
    isHighlight ?
      (<button style={{ backgroundColor: "green" }} className="square" onClick={() => onClick()}>
        { value}
      </button >)

      :

      (<button className="square" onClick={() => onClick()}>
        {value}
      </button>)

  );
};

export default Square;
