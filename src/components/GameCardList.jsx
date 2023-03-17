import React from "react";

import GameCard from "./GameCard";
const GameCardList = ({ games }) => {
  return (
    <div className="mt-5 flex flex-col gap-10 ">
      {games.map((game, index) => {
        return <GameCard key={index} game={game} />;
      })}
    </div>
  );
};

export default GameCardList;
