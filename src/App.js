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
  const[objJokes, setObjJokes]=useState([{}]);
  let [displayJoke, setDisplayJoke] = useState(["Waiting for Joke"]);

  function fetchAPI(){
    fetch('https://icanhazdadjoke.com/slack')
    .then((response)=>response.json())
    .then((results)=>{setDisplayJoke(displayJoke=results.attachments[0].text); 
        console.log("results", results)})
    .catch((error)=>console.log("err", error))
    //console.log("displayJoke", displayJoke)
    }



   // console.log("jokeItemsj", jokes)
    let deleteId=(id+1);
    let newSelectIds=[];
   // let selectJokeList=[...jokes]

const handleSelectDeleteChange= function(){
  
   
      let deleteId=id+1;

  
  
    //  console.log("jokeItems.jokeItem", jokes)
  // console.log("update idlist Test", [...idList, id])
    
      if(checked===true){
      
       // setIdList([...idList, id])
      //   if (!idList.includes(id)){
      //     console.log("yes")
      //  newSelectIds=[...idList, id]
      //  setIdList(newSelectIds);
      //  console.log("idlist in function", idList)}
        
      //   console.log("idlist", idList)
      //   setChecked(true)
      let editedEntryTrue=[{jokeItem: jokes[id], checked:true}]
  
       // selectJokeList.splice(id,0,editedEntryTrue)
       // selectJokeList.splice(deleteId,1)
       // console.log("selectJokeList in selectDelete", selectJokeList)
      // setObjJokes(selectJokeList);
        console.log("objJokes", objJokes)
   
       // setObjDelete([...selectJokeList]);
     // jokeItems.setJokes([{...selectJokeList}])
  
       // setJokeChecked(item);
       // jokeItems.jokeChecked=item;
        console.log("jokes", jokes)
      }
      else if(checked===false){
        ////selectJokeList.splice(id, 1)
        let editedEntryFalse=[{jokeItem: jokes[id], isChecked:false}]
  
        //selectJokeList.splice(id,0,editedEntryFalse)
       // selectJokeList.splice(deleteId,1)
        //console.log("selectJokeList after false", selectJokeList)
      }
      //jokeItems.jokeChecked=checked.slice();
 
  
  
    
    //console.log("jokeChecked",jokeItems.jokes)
    //return selectJokeList
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
        <List jokes={jokes} setJokes={setJokes} handleSelectDeleteChange={handleSelectDeleteChange}  objJokes={objJokes} setObjJokes={setObjJokes} id={id} setId={setId} checked={checked} setChecked={setChecked} checkedList={checkedList} setCheckedList={setCheckedList}/>
      <br />
      <br />
    <Form checkedList={checkedList} setCheckedList={setCheckedList} jokes={jokes} setJokes={setJokes}  fetchAPI={fetchAPI} displayJoke={displayJoke} handleSelectDeleteChange={handleSelectDeleteChange} checked={checked} setChecked={setChecked}/>
    
    <Footer />
    </div>
  );
}

export default App;

