import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ voters, setCurrentVoter }) => {
  const [voterId, setVoterId] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = voters.find(
      (v) => v.voterId === voterId && v.name === name
    );

    console.log(user)

    if (user) {
      setCurrentVoter(user); // ⭐ store voter
      navigate("/vote");
    } else {
      alert("Invalid voter");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <input
        placeholder="Voter"
        className="border p-2 m-2 rounded"
        onChange={(e) => setVoterId(e.target.value)}
      />
      <input
        placeholder="Name"
        className="border p-2 m-2 rounded"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;