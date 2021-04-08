import React from "react";

const RollButton = ({ roll }) => {
  return (
    <button
      onClick={roll}
      className="py-5 px-20 m-2 text-2xl font-semibold text-center text-white uppercase bg-black border border-transparent rounded"
    >
      Roll
    </button>
  );
};

export default RollButton;
