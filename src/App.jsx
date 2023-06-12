import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={<Home />}
          path="/"
        />
        <Route
          element={<Dashboard />}
          path="/dashboard"
        />
        <Route
          element={<Login />}
          path="/login"
        />
        <Route
          element={<Donate />}
          path="/donate"
        />
        <Route
          element={<Register />}
          path="/register"
        />
      </Routes>
    </Router>
  );
}

export default App;
