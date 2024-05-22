import "./App.css";
import Welcome from "./pages/Welcome";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNotes from "./pages/MyNotes";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Home />} />
          <Route path="/my-notes" element={<MyNotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
