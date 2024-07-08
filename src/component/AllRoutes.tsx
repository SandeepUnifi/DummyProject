import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotfound from "../pages/PageNotfound";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNotfound />} />
    </Routes>
  );
};
