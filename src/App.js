import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";
import Verification from "./pages/Verification";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isDropDownMenu,setIsDropDownMenu] = useState(false)

  const handleDropDownMenu = () => {
    setIsDropDownMenu(!isDropDownMenu)
} 
  return (
    <div className="min-h-screen bg-slate-50 font-lato">
      <BrowserRouter>
        {isUserLoggedIn && <NavBar handleDropDownMenu={handleDropDownMenu} />}
        <Routes>
          <Route 
            path="/"
            element={isUserLoggedIn ? <Home isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} isDropDownMenu={isDropDownMenu}/> : <Navigate to={"/login"} />}
          />
          <Route 
            path="/profile"
            element={isUserLoggedIn ? <Profile isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} isDropDownMenu={isDropDownMenu}/> : <Navigate to={"/login"} />}
          />
          <Route 
            path="/product/:id"
            element={isUserLoggedIn ? <ProductDetails isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} isDropDownMenu={isDropDownMenu}/> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={!isUserLoggedIn ? <Login setIsUserLoggedIn={setIsUserLoggedIn} /> : <Navigate to={"/"} />}
          />  
          <Route
            path="/signup"
            element={!isUserLoggedIn ? <Signup setIsUserLoggedIn={setIsUserLoggedIn} /> : <Navigate to={"/"} />}
          />
          <Route
            path="/change-password"
            element={!isUserLoggedIn ? <ChangePassword /> : <Navigate to={"/"} />}
          />  
          <Route
            path="/verify-account"
            element={!isUserLoggedIn ? <Verification /> : <Navigate to={"/"} />}
          />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
