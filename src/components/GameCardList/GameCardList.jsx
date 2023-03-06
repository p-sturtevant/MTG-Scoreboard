import React from "react";
import "./list.scss";
import GameCard from "../GameCard/GameCard";
const GameCardList = ({ games }) => {
  return (
    <div className="list">
      {games.map((game) => {
        return <GameCard game={game} />;
      })}
    </div>
  );
};

export default GameCardList;
