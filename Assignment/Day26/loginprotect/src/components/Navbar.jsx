
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">MyApp</h1>

      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/login" className="hover:text-blue-500 transition">Login</Link>
        <Link to="/register" className="hover:text-blue-500 transition">Register</Link>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;