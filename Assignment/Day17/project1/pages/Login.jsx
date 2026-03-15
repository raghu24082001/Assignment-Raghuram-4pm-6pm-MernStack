import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/main");
  };

  return (
   <>
    <div className="bg-blue-300  rounded h-121 flex flex-col gap-5 items-center justify-center">
      <h3>Login Page</h3>

      <input type="text" placeholder="Username" className="bg-white p-1 rounded" />
      <input type="password" placeholder="Password"  className="bg-white p-1 rounded" />
      <button onClick={handleLogin} className="bg-black text-white p-1 px-2 rounded">Login</button>
    </div>
   </>
  );
}

export default Login;