import AppShell from "./layouts/AppShell";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/mercury" replace />} />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;
