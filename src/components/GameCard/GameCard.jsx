import React from "react";
import "./gamecard.scss";
const GameCard = ({ game }) => {
  return (
    <div class="card">
      <div className="header">
        <h2 class="commander">{game.commander}</h2>
        <p class="life-total">{game.lifeTotal}</p>
      </div>
      <div class="win-condition">
        <h3>Win Condition</h3>
        <p>{game.winCon}</p>
      </div>
      <div class="player-learning">
        <h3>Player Learning</h3>
        <p>A short blurb about what the player learned.</p>
      </div>
    </div>
  );
};

export default GameCard;
