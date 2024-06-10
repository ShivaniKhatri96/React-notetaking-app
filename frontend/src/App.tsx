import "./App.css";
import Welcome from "./pages/Welcome";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNotes from "./pages/MyNotes";
import Home from "./pages/Home";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import UnauthenticatedRoute from "./components/routes/UnauthenticatedRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/welcome"
            element={
              <UnauthenticatedRoute>
                <Welcome />
              </UnauthenticatedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-notes"
            element={
              <ProtectedRoute>
                <MyNotes />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
