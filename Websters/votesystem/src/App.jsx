import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Voting from "./pages/Voting";
import PartyDetails from "./pages/PartyDetails";
import Results from "./pages/Results";
import Layout from "./components/Layout";
import { voters as initialVoters } from "./data/Voters";

function App() {
  const [partyData, setPartyData] = useState([
    { name: "DMK", symbol: "🌅", votes: 0 },
    { name: "ADMK", symbol: "🌿", votes: 0 },
    { name: "TVK", symbol: "🔥", votes: 0 },
    { name: "NTK", symbol: "🐅", votes: 0 },
  ]);

  const [voters, setVoters] = useState(initialVoters);
  const [currentVoter, setCurrentVoter] = useState(null); // ⭐ important

  const vote = (partyName) => {
    const updated = partyData.map((p) =>
      p.name === partyName ? { ...p, votes: p.votes + 1 } : p
    );
    setPartyData(updated);
  };

  const markVoted = (voterId) => {
    const updated = voters.map((v) =>
      v.voterId === voterId ? { ...v, hasVoted: true } : v
    );
    setVoters(updated);
  };

  return (
    
      <Routes>
        <Route
          path="/"
          element={
            <Login voters={voters} setCurrentVoter={setCurrentVoter} />
          }
        />

        <Route element={<Layout />}>
          <Route
            path="/vote"
            element={
              <Voting
                partyData={partyData}
                vote={vote}
                voters={voters}
                markVoted={markVoted}
                currentVoter={currentVoter}
                setCurrentVoter={setCurrentVoter}
              />
            }
          />
          <Route path="/parties" element={<PartyDetails partyData={partyData} />} />
          <Route path="/results" element={<Results partyData={partyData} />} />
        </Route>
      </Routes>
    
  );
}

export default App;