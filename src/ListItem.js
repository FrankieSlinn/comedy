import EditForm from "./EditForm";
import {useState} from "react";
export default function ListItem(jokeItems){
    function log(){
        console.log("start works")
    }
const [star, setStar]=useState(false);
//console.log("jokeItem", jokes)
console.log("star before function", star)

function removeItem(){

console.log("id", jokeItems.index)
//const newItem = {...props={}};
//      newItem.splice(props.index,1)
//     console.log("removeTodo", newItem)
//    setNewTodoList(newItem);
//     console.log("newTodolist after remove", newTodoList)
//     
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
         </li>
    
    )
}
