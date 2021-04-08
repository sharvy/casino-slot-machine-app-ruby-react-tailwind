import React, { useState } from "react";
import { Block } from "./Block";

const Game = (props) => {
  const { credit, rollApi } = props;

  const [loading, setLoading] = useState(false);
  const [rollResult, setRollResult] = useState(["X", "X", "X"]);
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

  const roll = async () => {
    setLoading(true);

    let response = await fetch(rollApi);
    response = await response.json();

    setTimeout(() => {
      setLoading(false);
      setCurrentCredit(response.credit);
      setRollResult(response.result);
    }, 1000)
  };

  return (
    <div className="container flex flex-wrap mt-40 pb-10 m-auto px-12">
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-center py-4 pt-0">
          <table class="table-fixed w-full h-48 border-separate border border-white">
            <tbody>
              <tr>
                <Blocks />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full text-center mt-20">
        <button
          onClick={roll}
          className="p-5 px-20 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded"
        >
          Roll
        </button>
        <button className="p-5 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded">
          Cashout
        </button>
      </div>

      <div className="w-full text-center font-semibold text-5xl">
        Credit: {currentCredit}
      </div>
    </div>
  );
};

export default Game;
