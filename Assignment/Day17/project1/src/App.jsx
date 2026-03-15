import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Main from "../pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;