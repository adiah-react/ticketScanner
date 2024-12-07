import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/scan" element={<h1>Scanner</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
};
export default App;
