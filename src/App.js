import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";


import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";
import EmailVerification from "./pages/EmailVerification";
import PasswordVerification from "./pages/PasswordVerification";

function App() {
  const [isDropDownMenu,setIsDropDownMenu] = useState(false)

  const handleDropDownMenu = () => {
    setIsDropDownMenu(!isDropDownMenu)
  }
  
  const { user } = useAuthContext()

  const userVerification = useAuthContext().userVerification || JSON.parse(localStorage.getItem("userVerification"));
  return (
    <div className="min-h-screen bg-slate-50 font-lato">
      <BrowserRouter>
        {/* user routes */}
        {user && <NavBar handleDropDownMenu={handleDropDownMenu} />}
        <Routes>
          <Route 
            path="/"
            element={user ? <Home isDropDownMenu={isDropDownMenu}/> : <Navigate to={"/login"} />}
          />
          <Route
            path="/change-password"
            element={userVerification ? <ChangePassword /> : <Navigate to={"/login"} />}
          />  
          <Route 
            path="/profile"
            element={user ? <Profile isDropDownMenu={isDropDownMenu}/> : <Navigate to={"/login"} />}
          />
          <Route 
            path="/product/:id"
            element={user ? <ProductDetails isDropDownMenu={isDropDownMenu}/> : <Navigate to={"/login"} />}
          />
        {/* guests routes */}
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/"} />}
          />  
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to={"/"} />}
          />
          <Route
            path="/verify-email"
            element={!user ? <EmailVerification /> : <Navigate to={"/"} />}
          />  
          <Route
            path="/verify-password"
            element={!user ? <PasswordVerification /> : <Navigate to={"/"} />}
          />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
