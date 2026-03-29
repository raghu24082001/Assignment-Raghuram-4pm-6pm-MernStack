import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    Password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = JSON.parse(localStorage.getItem("user"));

    if (!getData) {
      alert("No user found. Please register first.");
      navigate('/register');
      return;
    }

    if (
      getData?.email === state.email &&
      getData?.Password === state.Password
    ) {
      navigate('/');
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={state.email}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="Password"
            required
            onChange={handleChange}
            value={state.Password}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
