import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CommunityCart from "./pages/CommunityCart";
import CommunityDetail from "./pages/CommunityDetail";
import CommunityEvent from "./pages/CommunityEvent";
import CommunityPayment from "./pages/CommunityPayment";
import CommunityStore from "./pages/CommunityStore";
import DetailEvent from "./pages/DetailEvent";
import DetailProduct from "./pages/DetailProduct";
import EventList from "./pages/EventList";
import HistoryOrder from "./pages/HistoryOrder";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/community" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/community/feed" element={<CommunityDetail />} />
        <Route path="/community/event" element={<CommunityEvent />} />
        <Route path="/community/store" element={<CommunityStore />} />
        <Route path="/community/cart" element={<CommunityCart />} />
        <Route path="/community/payment" element={<CommunityPayment />} />
        <Route path="/community/historyorder" element={<HistoryOrder />} />
        <Route path="/community/postdetail" element={<PostDetail />} />
        <Route path="/profile" element={<UserProfile />} />

        <Route path="/event" element={<EventList />} />
        <Route path="/detailevent" element={<DetailEvent />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
