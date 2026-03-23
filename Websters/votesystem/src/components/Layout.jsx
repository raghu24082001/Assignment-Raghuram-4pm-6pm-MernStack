import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/vote">Vote</Link>
        <Link to="/parties">Parties</Link>
        <Link to="/results">Results</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;