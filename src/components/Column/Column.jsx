import React from "react";
import Name from "../Names/Names";
import GameCardList from "../GameCardList/GameCardList";
import "./column.scss";
const Column = ({ name, score }) => {
  return (
    <div className="column">
      <Name name={name} score={score} />
      <GameCardList />
    </div>
  );
};

export default Column;
