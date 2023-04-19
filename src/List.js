import ListItem from "./ListItem";

export default function List(props){
    console.log("listprops", props)
    console.log("props.jokes.jokes", props.jokes)
    const jokeItems=props.jokes.map(function(item, index){console.log("item in list", props.jokes); return <ListItem jokeItem={item} key={index} index={index} jokeList={props.jokes} setJokes={props.setJokes}/>})
    let jokeList=[props.jokes]
    console.log("jokeList", jokeList)
    return (
<>
<ul >
    {jokeItems}
    {jokeList=props.jokes}



</ul>
</>

    )
    
}