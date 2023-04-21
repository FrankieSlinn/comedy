import { useState } from "react";
export default function ListItem(jokeItems) {
  //console.log("jokeItems in jokeItems", jokeItems)

  let selectJokeList = [...jokeItems.jokeList];
  const [star, setStar] = useState(false);
  const [changeItem, setChangeItem] = useState(false);

  jokeItems.setId(jokeItems.index);

  function removeItem() {
    let newItem = [...jokeItems.jokeList];
    newItem.splice(jokeItems.id, 1);
    jokeItems.setJokes(newItem);
  }
  function handleJokeChanges(e) {
    e.preventDefault();
    let editedJoke = e.target.value;
    let editedJokeList = [...jokeItems.jokeList];
    let spliceId = jokeItems.id + 1;
    let newEditedJokeList = [
      editedJokeList.splice(jokeItems.id, 0, editedJoke),
    ];
    editedJokeList.splice(spliceId, 1);
    jokeItems.setJokes(editedJokeList);
    editedJokeList = [];
    editedJoke = "";
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    setChangeItem(false);
  }

  function captureChecks(e) {
    console.log("jokeitems.jokes", jokeItems.jokes);
    console.log("jokeItems.jokes[id]", jokeItems.id);

    let itemChecked = e.target.checked;
    console.log("itemChecked", itemChecked);
    if (itemChecked == true) {
      console.log("true");
      if (!jokeItems.checkedList.includes(jokeItems.jokes[jokeItems.id])) {
        console.log("included");
        jokeItems.setCheckedList([
          ...jokeItems.checkedList,
          jokeItems.jokes[jokeItems.id],
        ]);
        console.log("jokeItems.checkedList true", jokeItems.checkedList);
      }
    }
    if (itemChecked == false) {
      console.log("false");
      if (jokeItems.checkedList.includes(jokeItems.jokes[jokeItems.id])) {
        console.log("in list");
        jokeItems.setCheckedList(
          jokeItems.checkedList.filter(
            (item) => item != jokeItems.joke[jokeItems.id]
          )
        );
        console.log("jokeItems.checkedList", jokeItems.checkedList);
      }
    }
  }

  return (
    <>
      <li className="jokeListed" id={jokeItems.index} style={{listStyleType:"none"}}>
        {jokeItems.jokeItem}
        <input
          type="checkbox"
          index={jokeItems.id}
          onClick={(e) => {
            {
              captureChecks(e);
            }
            jokeItems.setChecked(!jokeItems.checked);
            console.log("checked in function", jokeItems.checked, jokeItems.id);
            jokeItems.setId(jokeItems.index);
            console.log("checked, id", jokeItems.checked, jokeItems.id);
          }}
          onChange={jokeItems.handleSelectDeleteChange}
        />

        <label id={jokeItems.id} />
        <button
          className="star"
          style={{ color: star ? "yellow" : "#ccc" }}
          onClick={() => {
            setStar(!star);
          }}
        >
          {" "}
          &#9733;
        </button>
        <button className="remove" onClick={removeItem}>
          Remove
        </button>
        &nbsp;&nbsp;
        <button
          className="edit"
          onClick={() => {
            setChangeItem(true);
          }}
        >
          Edit
        </button>
        <br />
        <form
          className="editForm"
          onSubmit={handleFormSubmit}
          style={{ display: changeItem ? "inline-block" : "none" }}
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
