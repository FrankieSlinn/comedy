//import React Router to be able to set page views, implement navigation links
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Navigation from "./Navigation";
import About from "./About";

//Set page views
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
