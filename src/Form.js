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

        <button onClick={handleClick}>Get a Hilarious Joke</button>
        <button onClick={addJokeToList}>Add Hilarious Joke to List</button>
        <br />
        <button onClick={deleteSelected}>Delete Selected Jokes</button>
        <button onClick={handleDelete}>Delete All Jokes</button>

        {props.displayJoke}
        {ListItem}


    


     {/* // <div>{props.jokes}</div>  */}
        </>
    )
}