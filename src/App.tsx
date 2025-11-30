import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Theme from "./stores/theme/Theme";

function App() {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
