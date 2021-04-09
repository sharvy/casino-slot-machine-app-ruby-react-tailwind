import React, { useRef } from "react";
import { takeChance, randomStyle } from "./utils";

const CashoutButton = ({ cashout }) => {
  const cashoutButton = useRef(null);
  const cashoutStyle = takeChance(50) ? randomStyle : null;
  const disabledCashout = takeChance(40) ? true : false;

  const addStyle = () => {
    cashoutButton.current.style.position = "relative";
    cashoutButton.current.style[cashoutStyle] = "300px";
  };

  return (
    <button
      ref={cashoutButton}
      onMouseOver={addStyle}
      disabled={disabledCashout}
      onClick={cashout}
      className="p-5 m-2 text-2xl font-semibold text-center text-white bg-black border border-transparent rounded"
    >
      CASH OUT
    </button>
  );
};

export default CashoutButton;
