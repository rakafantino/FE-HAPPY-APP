import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import HomePage from './pages/HomePage';
import EventList from "./pages/EventList";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
