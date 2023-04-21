import Form from "./Form";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";
import {useState, useEffect} from "react";


export default function Homepage(){
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
    return(
        <>
        <Header />
          <List jokes={jokes} setJokes={setJokes}  id={id} setId={setId} checked={checked} setChecked={setChecked} checkedList={checkedList} setCheckedList={setCheckedList}/>
        <br />
        <br />
      <Form checkedList={checkedList} setCheckedList={setCheckedList} jokes={jokes} setJokes={setJokes}  fetchAPI={fetchAPI} displayJoke={displayJoke} setDisplayJoke={setDisplayJoke} checked={checked} setChecked={setChecked}/>
      <br />
        <Footer />
      </>
    )
}