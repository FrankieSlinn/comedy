export default function Form(props) {

  //Function for retrieving joke after the get joke button has been clicked. Initiates API Fetch.
  function handleClick(e) {
    e.preventDefault();
    props.fetchAPI();
  }

  //Function for adding joke to the joke list. 
  function addJokeToList() {
    //Condition added to ensure that placeholder text not added as joke. 
    if (props.displayJoke !== "Find Another Comedy Gem") {
    //Makes copy of joke list and adds new joke via spread operator.
      props.setJokes([...props.jokes, props.displayJoke]);
    }
    //Changes displayed joke back to placeholder text.
    props.setDisplayJoke("Find Another Comedy Gem");
  }

  //Initiated when the "delete all" button is clicked. Sets the joke list to an empty array. 
  function handleDelete() {
    props.setJokes([]);
  }
  
  //Initiated when the "delete selected" button is clicked. 
  //the checkedList contains the jokes marked as selected.
  //For each id in the checked list, the joke with that ID is removed from the joke list
  //The checkedList is set back to an empty array. 
  function deleteSelected(e) {
    e.preventDefault();
      [...props.checkedList].forEach((element) => {
      props.jokes.splice(props.jokes.indexOf(element), 1);
      props.setJokes([...props.jokes]);
      props.setCheckedList([]);
    });
  }

  return (
    <>
      <div className="displayJoke">{props.displayJoke}</div>
      <br />
      <button className="buttonMain" onClick={handleClick}>
        Get a Hilarious Joke
      </button>
      &nbsp;&nbsp;
      <button className="buttonMain" onClick={addJokeToList}>
        Add Joke to List
      </button>
      <br />
      <br />
      <button className="buttonMain" onClick={deleteSelected}>
        Delete Selected Jokes
      </button>
      &nbsp;&nbsp;
      <button className="buttonMain" onClick={handleDelete}>
        Delete All Jokes
      </button>
    </>
  );
}
