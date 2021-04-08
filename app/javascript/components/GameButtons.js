import React from "react";

export const GameButtons = ({ currentCredit, start, roll, cashout }) => {
  const StartButton = () => (
    <div className="w-full text-center mt-20">
      <button
        onClick={start}
        className="py-5 px-20 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded"
      >
        START
      </button>
    </div>
  );

  const RollAndCashout = () => (
    <div className="w-full text-center mt-20">
      <button
        onClick={roll}
        className="py-5 px-20 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded"
      >
        Roll
      </button>
      <button
        onClick={cashout}
        className="p-5 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded"
      >
        CASH OUT
      </button>
    </div>
  );

  // if (currentCredit) return <RollAndCashout />;
  // else return <StartButton />;
  return <StartButton />;
};
