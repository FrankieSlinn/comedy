import Form from "./Form";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

//Capture useState Hook parameters here
export default function Homepage() {
  const [jokes, setJokes] = useState([]);
  const [id, setId] = useState(null);
  const [checked, setChecked] = useState(true);
  const [checkedList, setCheckedList] = useState([]);
  let [displayJoke, setDisplayJoke] = useState(["Waiting for Joke"]);

  //Function for API Call
  function fetchAPI() {
    {
      APICall();
    }
  }

  //function for useEffect Hook to prevent API running more than needed
  useEffect(function () {
    {
      APICall();
    }
  }, []);

  //function for API Call separate to keep code DRY
  function APICall() {
    fetch("https://icanhazdadjoke.com/slack")
      .then((response) => response.json())
      .then((results) => {
        setDisplayJoke((displayJoke = results.attachments[0].text));
      })
      .catch((error) => console.log("err", error));
  }

  return (
    <>
      <Header />

      {/* Data passed to children via their components in the return statement */}
      <List
        jokes={jokes}
        setJokes={setJokes}
        id={id}
        setId={setId}
        checked={checked}
        setChecked={setChecked}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />
      <Form
        checkedList={checkedList}
        setCheckedList={setCheckedList}
        jokes={jokes}
        setJokes={setJokes}
        fetchAPI={fetchAPI}
        displayJoke={displayJoke}
        setDisplayJoke={setDisplayJoke}
        checked={checked}
        setChecked={setChecked}
      />
      <br />
      <Footer />
    </>
  );
}
