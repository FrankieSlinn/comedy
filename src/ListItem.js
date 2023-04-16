import EditForm from "./EditForm";

export default function ListItem(jokeItems){
    console.log("props joke in ListItem", jokeItems.jokeItem)
    return(
        <>
        <li>
          {jokeItems.jokeItem}
        </li>
        </>
    )
}