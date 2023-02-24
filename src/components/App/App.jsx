import React, { useState } from "react";
import Column from "../Column/Column";
import "./app.scss";
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name1, setName1] = useState("Matt");
  const [name2, setName2] = useState("Parker");
  return (
    <div className="App">
      <div className="main-content">
        <Column name={name1} score={count1} />
        <Column name={name2} score={count2} />
      </div>
    </div>
  );
}

export default App;
