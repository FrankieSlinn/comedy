import EditForm from "./EditForm";
import {useState} from "react";
export default function ListItem(jokeItems){
    function log(){
        //console.log("start works")
    }
const [star, setStar]=useState(false);
const [changeItem, setChangeItem]=useState(false);
const[showEditForm, setShowEditForm]=useState(false);

const[newJokeList, setNewJokeList]=useState(jokeItems.jokeList);
//jokeItems.setJokes(newJokeList);
let id=jokeItems.index;
let editedJokeList=[];

function removeItem(){
let newItem = [...jokeItems.jokeList];
newItem.splice(id,1)
console.log("spliced newItem", newItem)
jokeItems.setJokes(newItem); 
}
function handleJokeChanges(e){
    e.preventDefault();
    console.log("e.target.value", e.target.value)
    let editedJoke=e.target.value;
    let editedJokeList=[...jokeItems.jokeList]
    let spliceId=id+1;
    let newEditedJokeList=[editedJokeList.splice(id,0,editedJoke)];
    console.log("edited jokelist, deditedJoke", editedJokeList, editedJoke); 
    console.log("id in edited joke", id)
    editedJokeList.splice(spliceId,1);
    console.log("editedJoke after splice", editedJokeList)
    console.log("edited joke with id", editedJokeList[id])
    jokeItems.setJokes(editedJokeList); 
    editedJokeList=[];
    editedJoke="";
}
function handleFormSubmit(e) {
    e.preventDefault();
    setChangeItem(false);
  
    //props.addSkill(newSkill);
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
        <button className="edit" onClick={()=>{setChangeItem(true)}}>Edit</button>

      
        <br />
        <form className="editForm" onSubmit={handleFormSubmit} style={{display: changeItem?"inline-block":"none"}}>
        <input className="editInput" type = "text" onChange={handleJokeChanges} value={jokeItems.jokeItem} style={{display:changeItem?"inline-block":"none", width: "850px", textSlign: "center"}}></input>
        <br />
        <button className="submitEdit" type="submit" style={{display:changeItem?"inline-block":"none"}}>Submit</button>
        </form>
         </li>
    
    )
}
