import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRouter from "./ProtectedRouter";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRouter>
            {" "}
            <Home />{" "}
          </ProtectedRouter>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
