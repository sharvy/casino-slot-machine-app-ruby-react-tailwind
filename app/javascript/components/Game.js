import React from "react";

const Game = () => {
  return (
    <div className="container flex flex-wrap mt-40 pb-10 m-auto px-12">
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-center py-4 pt-0">
          <div className="p-4 w-1/3">
            <label className="flex flex-col rounded relative">
              <div className="w-full px-4 py-8 rounded bg-blue-500">
                <p className="text-5xl font-bold text-center text-white">X</p>
              </div>
            </label>
          </div>

          <div className="p-4 w-1/3">
            <label className="flex flex-col rounded relative">
              <div className="w-full px-4 py-8 rounded bg-blue-500">
                <p className="text-5xl font-bold text-center text-white">X</p>
              </div>
            </label>
          </div>

          <div className="p-4 w-1/3">
            <label className="flex flex-col rounded relative">
              <div className="w-full px-4 py-8 rounded bg-blue-500">
                <p className="text-5xl font-bold text-center text-white">X</p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-20">
        <button className="p-5 px-20 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded">
          Roll
        </button>
        <button className="p-5 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded">
          Cashout
        </button>
      </div>
    </div>
  );
};

export default Game;
