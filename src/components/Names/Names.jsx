import React, { useState } from "react";
import "./names.scss";
import GameCardList from "../GameCardList/GameCardList";
const Names = ({ name, score }) => {
  return (
    <>
      <div className="names-container">
        <div className="name">
          <h1>{name}</h1>
          <h3>{score}</h3>
        </div>
      </div>
    </>
  );
};

export default Names;
