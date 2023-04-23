import ListItem from "./ListItem";

export default function List(props) {
  const jokeItems = props.jokes.map(function (item, index) {
    return (
      <ListItem
        handleSelectDeleteChange={props.handleSelectDeleteChange}
        id={index}
        setId={props.setId}
        jokeItem={item}
        jokes={props.jokes}
        setChecked={props.setChecked}
        checked={props.checked}
        key={index}
        index={index}
        jokeList={props.jokes}
        setJokes={props.setJokes}
        checkedList={props.checkedList}
        setCheckedList={props.setCheckedList}
      />
    );
  });

  return (
    <>
      <ul>{jokeItems}</ul>
    </>
  );
}
