import React from "react";
import Block from "./Block";

const Blocks = ({ rollResult, loading }) => {
  const BlocksRow = () =>
    rollResult.map((name, index) => (
      <Block
        key={`${name}-${index}`}
        loading={loading}
        position={index + 1}
        name={name}
      />
    ));

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center py-4 pt-0">
        <table className="table-fixed w-full h-48 border-separate border border-white">
          <tbody>
            <tr>
              <BlocksRow />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blocks;
