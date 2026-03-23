import { useNavigate } from "react-router-dom";

const Voting = ({
  partyData,
  vote,
  voters,
  markVoted,
  currentVoter,
  setCurrentVoter,
}) => {
  const navigate = useNavigate();

  const handleVote = (partyName) => {
    if (!currentVoter) {
      alert("Please login first");
      navigate("/");                 
      return;
    }

    if (currentVoter.hasVoted) {
      alert("You already voted!");
      navigate("/");
      return;
    }

    vote(partyName);
    markVoted(currentVoter.voterId);

    alert("Vote submitted ✅");

    setCurrentVoter(null); // 🔥 logout after vote
    navigate("/");         // 🔥 back to login
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Vote for your party</h1>
       
      {partyData.map((party) => (
        <div key={party.name} className="flex gap-4 mb-3">
          <span>{party.symbol}</span>
          <span>{party.name}</span>

          <input
            type="radio"
            name="party"
            onChange={() => handleVote(party.name)}
          />
        </div>
      ))}
    </div>
  );
};

export default Voting;