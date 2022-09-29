import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import CommunityDetail from "./pages/CommunityDetail";
import EventList from "./pages/EventList";
import DetailEvent from "./pages/DetailEvent"
import DetailProduct from './pages/DetailProduct'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<CommunityDetail />} />
        <Route path="/event" element={<EventList />} />
        <Route path="/detailevent" element={<DetailEvent />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
