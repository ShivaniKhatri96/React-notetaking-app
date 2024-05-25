import "./App.css";
import Welcome from "./pages/Welcome";
import Navbar from "./components/header/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyNotes from "./pages/MyNotes";
import Home from "./pages/Home";
import { useAppSelector } from "./app/hooks";

function App() {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          {token === null ? (
            <>
              <Route path="/welcome" element={<Welcome />} />
              <Route path="*" element={<Navigate replace to="/welcome" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/my-notes" element={<MyNotes />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
