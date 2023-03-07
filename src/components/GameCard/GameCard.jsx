import React, { useEffect } from "react";

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
    boros: {
      primary: "linear-gradient(45deg, #B30006, #FFF9DE)",
    },
    simic: {
      primary: "linear-gradient(45deg, #006FE6, #05800B)",
    },
  };

  // const determineColor = (deckColors) => {
  //   let header = document.querySelector(".header");
  //   header.style.backgroundColor = COLORS[deckColors].primary;
  // };

  // useEffect(() => {
  //   determineColor(game.colors.toLowerCase());
  // }, [game.colors]);
  return (
    <div className="card w-96 bg-base-100 shadow-xl font-poppins">
      <div
        className="flex justify-between p-4 text-white rounded-tr-xl rounded-tl-xl"
        style={{ background: COLORS[game.colors.toLowerCase()].primary }}
      >
        <h2 className="card-title">{game.commander}</h2>
        <p className="badge badge-lg badge-ghost">{game.lifeTotal}</p>
      </div>
      <div className="card-body">
        <h3 className="text-lg ">Win Condition</h3>
        <p className="font-inter">{game.winCon}</p>
        <h3 className="text-lg mt-2">Player Learning</h3>
        <p className="font-inter">
          A short blurb about what the player learned.
        </p>
      </div>
    </div>
  );
};

export default GameCard;
