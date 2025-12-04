import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./containers/layout/Layout";
import Theme from "./stores/theme/Theme";
import Country from "./pages/country/Country";

function App() {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<Country />} />
          </Route>
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
