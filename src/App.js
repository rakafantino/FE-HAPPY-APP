import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import EventList from "./pages/EventList";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/event" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
