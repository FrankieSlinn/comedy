import logo from './logo.svg';


import {Routes, Route, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import './App.css';
import Homepage from "./Homepage";
import Navigation from "./Navigation";
import Form from "./Form";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";

function App() {


  //Set Initial State of Jokes



  return (
    <div className="App">
         <Navigation />
      <Routes>
   <Route path="/" element={<Homepage />}/>
   <Route path="/about" element={<About />}/>
</Routes>
    </div>
  );
}

export default App;

