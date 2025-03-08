import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddMovie from "./components/AddMovie"; // ✅ Import AddMovie

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-movie" element={<AddMovie />} /> {/* ✅ Define route */}
      </Routes>
    </Router>
  );
};

export default App;
