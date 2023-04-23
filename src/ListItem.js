import { useState } from "react";
export default function ListItem(jokeItems) {

 //useState parameters for items only utilised in this child
  const [star, setStar] = useState(false);
  const [changeItem, setChangeItem] = useState(false);

  //assigns the index to an id variable
  jokeItems.setId(jokeItems.index);

  //triggered when the remove button next to a joke is clicked. 
  //makes a copy of the jokelist.
  //removes the item from the copy by its id. 
  //sets the joke list to the list with the item removed.
  function removeItem() {
    let newItem = [...jokeItems.jokeList];
    newItem.splice(jokeItems.id, 1);
    jokeItems.setJokes(newItem);
  }

 //triggered when the edit button next to a joke is clicked.
 //gets the joke content from the input field. 
 //makes a copy of the jokelist.
 //adds the new content to the copy of the joke list. 
 //deletes the old content from the copy of the joke list. 
 //sets the joke list to the amended copy.
 //sets the value of the edited joke and the joke list copy to empty values for future edits. 
  function handleJokeChanges(e) {
    e.preventDefault();
    let editedJoke = e.target.value;
    let editedJokeList = [...jokeItems.jokeList];
    let spliceId = jokeItems.id + 1;
    editedJokeList.splice(jokeItems.id, 0, editedJoke);
    editedJokeList.splice(spliceId, 1);
    jokeItems.setJokes(editedJokeList);
    editedJokeList = [];
    editedJoke = "";
  }
  
  //Displays the edit input field and the submit button. 
  function handleFormSubmit(e) {
    e.preventDefault();
    setChangeItem(false);
  }

  //Reads the input value of the checked box.
  //If the item is checked and not on the checked list the joke is added to the checked list via the spread operator. 
  //If an item is unchecked this is removed form the checklist via a filter function.
  function captureChecks(e) {
    let itemChecked = e.target.checked;
    if (itemChecked == true) {
      if (!jokeItems.checkedList.includes(jokeItems.jokes[jokeItems.id])) {
        jokeItems.setCheckedList([
          ...jokeItems.checkedList,
          jokeItems.jokes[jokeItems.id],
        ])
      }
    }
    if (itemChecked == false) {
      if (jokeItems.checkedList.includes(jokeItems.jokes[jokeItems.id])) {
        jokeItems.setCheckedList(
          jokeItems.checkedList.filter(
            (item) => item != jokeItems.joke[jokeItems.id]
          )
        )
      }
    }
  }

  return (
    <>
      <li className="jokeListed" id={jokeItems.index} style={{listStyleType:"none"}}>
        {jokeItems.jokeItem}
        <div>
        <input
          type="checkbox"
          index={jokeItems.id}
          onClick={(e) => {
            {
              captureChecks(e);
            }
            jokeItems.setChecked(!jokeItems.checked);
            jokeItems.setId(jokeItems.index);
          }}
        />

        <label id={jokeItems.id} />
        <button
          className="star fave"
          style={{ color: star ? "yellow" : "#ccc" }}
          onClick={() => {
            setStar(!star);
          }}
        >
          {" "}
          &#9733;
        </button>
     
        <button className="remove" onClick={removeItem}>
        &#10006;
        </button>
     
        <button
          className="edit"
          onClick={() => {
            setChangeItem(true);
          }}
        >
          &#x270e;
        </button>
        </div>
        <br />
        <form
          className="editForm"
          onSubmit={handleFormSubmit}
          // style={{ display: changeItem ? "inline-block" : "none" }}
        >
          <input
            className="editInput"
            type="text"
            onChange={handleJokeChanges}
            value={jokeItems.jokeItem}
            style={{
              display: changeItem ? "inline-block" : "none",
              width: "850px",
              textSlign: "center",
            }}
          ></input>
          <br />
          <button
            className="submitEdit"
            type="submit"
            style={{ display: changeItem ? "inline-block" : "none" }}
          >
            Submit
          </button>
        </form>
      </li>
    </>
  );
}
