import React from "react";

export const CreditSummary = ({ currentCredit }) => {
  return (
    <div className="w-full text-center font-semibold uppercase text-xl">
      Remaining Credits: {currentCredit}
    </div>
  );
};
