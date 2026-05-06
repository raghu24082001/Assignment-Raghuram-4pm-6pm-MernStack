import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import ProtectedRoutes from "../routes/ProtectedRoutes"


const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Login/>} />

     <Route path="/dashboard" element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} />
   </Routes>
   </>
  )
}

export default App