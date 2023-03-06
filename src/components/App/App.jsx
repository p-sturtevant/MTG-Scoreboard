import React, { useEffect, useState } from "react";
import Column from "../Column/Column";
import "./app.scss";
function App() {
  const host = {
    name: "Parker",
    score: 4,
    games: [
      {
        lifeTotal: "20-0",
        colors: "Boros",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
      {
        lifeTotal: "20-0",
        colors: "Boros",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
      {
        lifeTotal: "20-0",
        colors: "Boros",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
      {
        lifeTotal: "20-0",
        colors: "Boros",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
      {
        lifeTotal: "20-0",
        colors: "Boros",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
    ],
  };
  const opponent = {
    name: "Matt",
    score: 3,
    games: [
      {
        lifeTotal: "20-0",
        colors: "Boros",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
      {
        lifeTotal: "20-0",
        colors: "Boros",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
      {
        lifeTotal: "20-0",
        colors: "Boros",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
    ],
  };

  const [count1, setCount1] = useState(host.score);
  const [count2, setCount2] = useState(opponent.score);
  const [name1, setName1] = useState(host.name);
  const [name2, setName2] = useState(opponent.name);

  return (
    <div className="App">
      <div className="main-content">
        <Column player={host} />
        <Column player={opponent} />
      </div>
    </div>
  );
}

export default App;
