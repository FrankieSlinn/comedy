import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
import Form from "./Form";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";

function App() {


  //Set Initial State of Jokes
  const [jokes, setJokes] = useState([""]);
  let [displayJoke, setDisplayJoke] = useState("Waiting for Joke");

  function fetchAPI(){
    fetch('https://icanhazdadjoke.com/slack')
    .then((response)=>response.json())
    .then((results)=>{setDisplayJoke(displayJoke=results.attachments[0].text); 
        console.log("results", results)})
    .catch((error)=>console.log("err", error))
    console.log("displayJoke", displayJoke)
    }

    // fetch('https://icanhazdadjoke.com/slack')
    // .then((response)=>response.json())
    // .then((results)=>{setJokes([...jokes, results.attachments[0].text]); 
    //     console.log("results", results.attachments[0].text)})
    // .catch((error)=>console.log("err", error))
    // console.log("jokes", jokes)

  return (
    <div className="App">
      <Header />
      <List jokes={jokes} setJokes={setJokes}/>
      <br />
      <br />
    <Form jokes={jokes} setJokes={setJokes} fetchAPI={fetchAPI} displayJoke={displayJoke}/>
    
    <Footer />
    </div>
  );
}

export default App;
