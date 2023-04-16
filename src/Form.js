export default function Form(props){

    console.log("props", props.displayJoke)
    console.log("props.jokes", props.jokes)

    function handleClick(e){
        e.preventDefault();
        props.fetchAPI()
       }

    function addJokeToList(){
  props.setJokes([...props.jokes, props.displayJoke])
       // return <ListItem jokes={jokes} setJokes={setJokes}/>
       }
   
    return(
        <>

        <button onClick={handleClick}>Get a Hilarious Joke</button>
        <button onClick={addJokeToList}>Add Hilarious Joke to List</button>
        {props.displayJoke}
     {/* // <div>{props.jokes}</div>  */}
        </>
    )
}