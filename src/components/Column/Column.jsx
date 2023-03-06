import React from "react";
import Name from "../Names/Names";
import GameCardList from "../GameCardList/GameCardList";
import "./column.scss";
const Column = ({ player }) => {
  return (
    <div className="column">
      <Name name={player.name} score={player.score} />
      <GameCardList games={player.games} />
    </div>
  );
};

export default Column;
