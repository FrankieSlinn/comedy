import ListItem from "./ListItem";

import Form from "./Form"

export default function List(props){


const jokeItems=props.jokes.map(function(item, index){//console.log("item in list", props.jokes);
    return <ListItem handleSelectDeleteChange={props.handleSelectDeleteChange}id={index} setId={props.setId} jokeItem={item} jokes={props.jokes} setChecked={props.setChecked} checked={props.checked} key={index} index={index} jokeList={props.jokes} setJokes={props.setJokes}  checkedList={props.checkedList} setCheckedList={props.setCheckedList} />
})
   //let jokeList=[props.jokes]


    
  

    return (
<>
<ul >
    {jokeItems}
   
    {/* {objJokes=props.objJokes} */}
    {/* //{setObjJokes=props.setObjJokes} */}

  



</ul>
</>

    )
    
}