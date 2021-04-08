import React from "react";

const CreditSummary = ({ currentCredit }) => {
  return (
    <div className="w-full text-center font-semibold uppercase text-xl">
      Remaining Credits: {currentCredit}
    </div>
  );
};

export default CreditSummary;
