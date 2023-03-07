import React from "react";
import Name from "../Names/Names";
import GameCardList from "../GameCardList/GameCardList";

const Column = ({ player }) => {
  return (
    <div className="flex flex-col items-center w-full h-fit">
      <Name name={player.name} score={player.score} />
      <GameCardList games={player.games} />
    </div>
  );
};

export default Column;
