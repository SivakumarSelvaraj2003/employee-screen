import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";
import Dashboard from "./Dashboard/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
