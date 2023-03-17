import React, { useState } from "react";
import GameCardList from "./GameCardList";
const Names = ({ name, score }) => {
  return (
    <>
      <div className="w-full m-auto mt-5 flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-inter">{name}</h1>
          <h3 className="text-2xl m-7 font-poppins">{score}</h3>
        </div>
      </div>
      <div className="divider" />
    </>
  );
};

export default Names;
