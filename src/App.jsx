import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Scan from "./pages/Scan";
import Ticket from "./pages/Ticket";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/tickets/:ticketId" element={<Ticket />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
};
export default App;
