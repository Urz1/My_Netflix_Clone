import "./index.css";
import React from "react";
import Home from "./pages/Home";
// import Navbar from './components/Navbar';
import Watch from "./pages/Watch";
import Register from "./pages/Register";
import Login from "./pages/Login ";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate   
 to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/movies" element={<Home type="movie" />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
};
export default App;
