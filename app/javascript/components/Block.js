import React from "react";
import Loading from "./Loading";

export const Block = ({ name, index, position, loading }) => {
  // loading = true;

  return (
    <td className="w-1/3 bg-blue-500 border-white border-8 h-48">
      {!loading && (
        <p className="text-3xl font-bold text-center text-white">{name}</p>
      )}

      {loading && (
        <Loading />
      )}
    </td>
  );
};
