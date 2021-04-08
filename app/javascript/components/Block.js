import React from "react";
import Loading from "./Loading";

export const Block = ({ name, index, position, loading }) => {
  return (
    <div className="p-4 w-1/3 h-48">
      <label className="flex flex-col rounded relative">
        <div className="w-full px-4 py-8 rounded bg-blue-500">
          <p className="text-5xl font-bold text-center text-white">{name}</p>
          {/* <Loading type="cylon" color="white" height={"50%"} width={"50%"} /> */}
        </div>
      </label>
    </div>
  );
};
