import React from "react";

const StartButton = ({ start }) => {
  return (
    <div className="w-full text-center mt-20">
      <button
        onClick={start}
        className="py-5 px-20 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded"
      >
        START
      </button>
    </div>
  );
};

export default StartButton;
