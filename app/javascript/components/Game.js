import React, { useState } from "react";
import { Block } from "./Block";
import { CreditSummary } from "./CreditSummary";
import { GameButtons } from "./GameButtons";

const Game = (props) => {
  const { credit, rollApi, startApi, cashoutApi } = props;

  const defaultResult = ["X", "X", "X"];
  const [loading, setLoading] = useState(false);
  const [rollResult, setRollResult] = useState(defaultResult);
  const [currentCredit, setCurrentCredit] = useState(credit);

  const Blocks = () =>
    rollResult.map((name, index) => (
      <Block
        key={`${name}-${index}`}
        loading={loading}
        position={index + 1}
        name={name}
      />
    ));

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
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-center py-4 pt-0">
          <table className="table-fixed w-full h-48 border-separate border border-white">
            <tbody>
              <tr>
                <Blocks />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
