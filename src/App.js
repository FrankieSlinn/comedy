import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
import Form from "./Form";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";

function App() {


  //Set Initial State of Jokes
  const [jokes, setJokes] = useState([]);
  const [id, setId]=useState(null);
  const[checked, setChecked]=useState(true);
  const[checkedList, setCheckedList]=useState([]);
  let [displayJoke, setDisplayJoke] = useState(["Waiting for Joke"]);

  function fetchAPI(){
    fetch('https://icanhazdadjoke.com/slack')
    .then((response)=>response.json())
    .then((results)=>{setDisplayJoke(displayJoke=results.attachments[0].text);})
    .catch((error)=>console.log("err", error))
    }


  return (
    <div className="App">
      <Header />
        <List jokes={jokes} setJokes={setJokes}  id={id} setId={setId} checked={checked} setChecked={setChecked} checkedList={checkedList} setCheckedList={setCheckedList}/>
      <br />
      <br />
    <Form checkedList={checkedList} setCheckedList={setCheckedList} jokes={jokes} setJokes={setJokes}  fetchAPI={fetchAPI} displayJoke={displayJoke} setDisplayJoke={setDisplayJoke} checked={checked} setChecked={setChecked}/>
    <br />
    <Footer />
    </div>
  );
}

export default App;

