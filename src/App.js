import "./App.css";
import Form from "./components/Form";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="content-container">
      <Router>
        <Navbar  />
        <div style={{ minHeight: "100vh", position: "relative" }}>
          <div className="container my-3">
            {/* Content */}
            <Routes>
              <Route path="/" element={<Home style={{ fontSize: "100px" }}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/form" element={<Form />} />
              <Route path="/contactus" element={<Contactus />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
