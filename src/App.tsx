import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./containers/layout/Layout";
import Theme from "./stores/theme/Theme";

function App() {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
