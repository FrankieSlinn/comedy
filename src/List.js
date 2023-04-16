import ListItem from "./ListItem";

export default function List(props){
    console.log("listprops", props)
    const jokeItems=props.jokes.map(function(item, index){console.log("item in list", item); return <ListItem jokeItem={item} key={index} index={index} />})
    return (
<>
<ul >
    {jokeItems}
</ul>
</>

    )
    
}