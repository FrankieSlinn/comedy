import ListItem from "./ListItem";

export default function List(props){
    console.log("listprops", props)

    const jokeItems=props.jokes.map(function(item, index){console.log("item in list", props.jokes); return <ListItem jokeItem={item} key={index} index={index} jokeList={props.jokes} setJokes={props.setJokes}/>})
    let jokeList=[props.jokes]
  

    return (
<>
<ul >
    {jokeItems}
    {jokeList=props.jokes}
  



</ul>
</>

    )
    
}