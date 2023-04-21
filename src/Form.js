import ReactDOM from 'react-dom'
import ListItem from "./ListItem";
import List from "./List";
export default function Form(props){

    //console.log("props in form", props)
    //console.log("props.jokes", props.jokes)

    function handleClick(e){
        e.preventDefault();
        props.fetchAPI()
       }

    function addJokeToList(){
  props.setJokes([...props.jokes, props.displayJoke])
  props.setDisplayJoke("Find Another Comedy Gem")
       }

       function handleDelete(){
        props.setJokes([]);
    }
   
 function deleteSelected(e){
  e.preventDefault();
  if(props.checkedList)console.log("props.checkList in deleteSelected", props.checkedList);
  let checkedListCopy=[...props.checkedList];
  console.log("checkedListCopy", checkedListCopy)
let filteredList=checkedListCopy.forEach(element => {
    props.jokes.splice(props.jokes.indexOf(element), 1)
    props.setJokes([...props.jokes])
    props.setCheckedList([])
    props.setChecked(false)
    checkedListCopy=[]
  })
 
  console.log("jokes", props.jokes)
  

 }

    return(
        <>
        <div className="displayJoke">
         {props.displayJoke }
         </div>
         <br />
        <button onClick={handleClick}>Get a Hilarious Joke</button>&nbsp;&nbsp;
        <button onClick={addJokeToList}>Add Hilarious Joke to List</button>
        <br />
        <br />
        <button onClick={deleteSelected}>Delete Selected Jokes</button>&nbsp;&nbsp;
        <button onClick={handleDelete}>Delete All Jokes</button>

       
</>

    )
}