import EditForm from "./EditForm";
import {useState} from "react";
export default function ListItem(jokeItems){
    console.log("jokes in listitem yy", jokeItems)
    function log(){
        //console.log("start works")
    }
const [star, setStar]=useState(false);
//console.log("jokeItem", jokes)
//console.log("star before function", star)

const[newJokeList, setNewJokeList]=useState(jokeItems.jokeList);
console.log("newJokeList", newJokeList, [...newJokeList])
//jokeItems.setJokes(newJokeList);


function removeItem(){
    console.log("removeItem running")
    console.log("newjokelist in removeitem", jokeItems.jokeList)
let id=jokeItems.index;
console.log("id", jokeItems.index)
let newItem = [...jokeItems.jokeList];
console.log("newItem", newItem)
newItem.splice(id,1)
console.log("spliced newItem", newItem)
jokeItems.setJokes(newItem); 

//newItem="";   
}
    return(
     
        // style={{color: "red"}}
        <li className="jokeListed" id={jokeItems.index}>
            {/* //     style={{
        backgroundColor: props.index % 2 ? "lavender" : "hotpink",
      }} */}
      {jokeItems.jokeItem}
          <button className="star" style={{color:star?"yellow":"#ccc"}}onClick={()=>{setStar(!star)}}> &#9733;</button>
          {/* //onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'} */}
       
        <button className="remove"onClick={removeItem}>Remove</button>
        <button className="edit">Edit</button>
         </li>
    
    )
}
