import React, { useState, useEffect } from "react";
import Loading from "./Loading";

export const Block = ({ name, position, loading }) => {
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayed(false);
    }, position * 1000);

    return () => clearTimeout(timeout);
  }, []);

  const shouldDelay = () => {
    if (name !== "X" && delayed) return true;
    return false;
  };

  return (
    <td className="w-1/3 bg-blue-500 border-white border-8 h-48">
      {!loading && !shouldDelay() && (
        <p className="text-5xl font-bold uppercase text-center text-white">
          {name}
        </p>
      )}

      {(loading || shouldDelay()) && <Loading />}
    </td>
  );
};
