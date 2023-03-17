import React, { useEffect, useMemo, useState } from "react";
import Auth from "./Auth";
import Column from "./Column";
import Form from "./Form";
import { supabase } from "../supabaseClient";
import Account from "./Account";
function App() {
  const host = {
    name: "Parker",
    score: 4,
    games: [
      {
        lifeTotal: "20-0",
        colors: "Golgari",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
      {
        lifeTotal: "20-0",
        colors: "Red",
        commander: "Winota",
        winCon:
          "I was able to pull off 3 winota triggers, and got an extra combat phase as well",
      },
      {
        lifeTotal: "20-0",
        colors: "Black",
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

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="App">
      {!session ? (
        <Auth />
      ) : (
        <>
          <div className="w-11/12 my-5 mx-auto flex justify-center">
            <Column player={host} />
            <Column player={opponent} />
          </div>
          <Form />
          <Account key={session.user.id} session={session} />
        </>
      )}
    </div>
  );
}

export default App;
