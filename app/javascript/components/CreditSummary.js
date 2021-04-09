import React from "react";

const CreditSummary = ({ currentCredit }) => {
  return (
    <div className="w-full text-center font-semibold text-xl">
      REMAINING CREDITS: {currentCredit}
    </div>
  );
};

export default CreditSummary;
