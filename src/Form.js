export default function Form(props){

    console.log("props", props.displayJoke)
    console.log("props.jokes", props.jokes)

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
   
    return(
        <>

        <button onClick={handleClick}>Get a Hilarious Joke</button>
        <button onClick={addJokeToList}>Add Hilarious Joke to List</button>
        <br />
        <button onClick={handleDelete}>Delete All Jokes</button>

        {props.displayJoke}
     {/* // <div>{props.jokes}</div>  */}
        </>
    )
}