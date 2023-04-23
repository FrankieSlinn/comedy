import {useState} from "react";

export default function Checkbox(){
    const [checked, setChecked]=useState(false);
    console.log("checked in checkbox", checked)
    function changeChecked(){
        
    }

    return(
        <>
    <div class="checkBox">
    <input type="checkbox" onClick={()=>{setChecked(!checked)}} checked={checked}/>
    checked={checked}
    </div>
    
    </>
    )

}