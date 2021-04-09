import React, { useState } from "react";
import Blocks from "./Blocks";
import CreditSummary from "./CreditSummary";
import GameButtons from "./GameButtons";
import { defaultResult } from "./settings";

const Game = (props) => {
  const { credit, rollApi, startApi, cashoutApi } = props;

  const [loading, setLoading] = useState(false);
  const [rollResult, setRollResult] = useState(defaultResult);
  const [currentCredit, setCurrentCredit] = useState(credit);

  const start = async () => {
    let response = await fetch(startApi);
    response = await response.json();

    setCurrentCredit(response.credit);
    setRollResult(defaultResult);
  };

  const roll = async () => {
    setLoading(true);
    let response = await fetch(rollApi);
    response = await response.json();
    setLoading(false);

    if (!response.error) {
      setCurrentCredit(response.credit);
      setRollResult(response.result);
    } else console.log(response);
  };

  const cashout = async () => {
    let response = await fetch(cashoutApi);
    response = await response.json();

    window.location = "/";
  };

  return (
    <div className="container flex flex-wrap mt-40 pb-10 m-auto px-12">
      <Blocks rollResult={rollResult} loading={loading} />

      <GameButtons
        currentCredit={currentCredit}
        roll={roll}
        cashout={cashout}
        start={start}
      />

      {currentCredit > 0 && <CreditSummary currentCredit={currentCredit} />}
    </div>
  );
};

export default Game;
