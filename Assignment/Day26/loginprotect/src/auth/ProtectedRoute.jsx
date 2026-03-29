

import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
   const checkData = JSON.parse(localStorage.getItem("user"))
    
   return checkData ? children : <Navigate to="/login" />
}

export default ProtectedRoute