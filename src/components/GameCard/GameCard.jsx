import React, { useEffect } from "react";
import "./gamecard.scss";
const GameCard = ({ game }) => {
  const COLORS = {
    red: { primary: "#B30006" },
    blue: { primary: "#006FE6" },
    black: { primary: "#2B2B2A" },
    green: { primary: "#05800B" },
    white: { primary: "#FFF9DE" },
    azorius: { primary: "#006FE6", secondary: "#FFF9DE" },
    dimir: { primary: "#006FE6", secondary: "#2B2B2A" },
    rakdos: { primary: "#B30006", secondary: "#2B2B2A" },
    gruul: { primary: "#B30006", secondary: "#05800B" },
    selesnya: { primary: "#05800B", secondary: "#FFF9DE" },
    orzhov: { primary: "#FFF9DE", secondary: "#2B2B2A" },
    izzet: { primary: "#B30006", secondary: "#2B2B2A" },
    golgari: { primary: "#FFF9DE", secondary: "#006FE6" },
    boros: { primary: "#B30006", secondary: "#FFF9DE" },
    simic: { primary: "#006FE6", secondary: "#05800B" },
  };

  // const determineColor = (deckColors) => {
  //   let header = document.querySelector(".header");
  //   header.style.backgroundColor = COLORS[deckColors].primary;
  // };

  // useEffect(() => {
  //   determineColor(game.colors.toLowerCase());
  // }, [game.colors]);
  return (
    <div className="card">
      <div
        className="header"
        style={{ backgroundColor: COLORS[game.colors.toLowerCase()].primary }}
      >
        <h2 className="commander">{game.commander}</h2>
        <p className="life-total">{game.lifeTotal}</p>
      </div>
      <div className="win-condition">
        <h3>Win Condition</h3>
        <p>{game.winCon}</p>
      </div>
      <div className="player-learning">
        <h3>Player Learning</h3>
        <p>A short blurb about what the player learned.</p>
      </div>
    </div>
  );
};

export default GameCard;
