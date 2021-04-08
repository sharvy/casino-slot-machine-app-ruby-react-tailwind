import React from "react";
import CashoutButton from "./CashoutButton";
import RollButton from "./RollButton";
import StartButton from "./StartButton";

const GameButtons = ({ currentCredit, start, roll, cashout }) => {
  const RollAndCashout = () => {
    return (
      <div className="w-full text-center mt-20">
        <RollButton roll={roll} />
        <CashoutButton cashout={cashout} />
      </div>
    );
  };

  if (currentCredit) return <RollAndCashout />;
  else return <StartButton start={start} />;
};

export default GameButtons;
