import {Link} from "react-router-dom";

export default function Navigation(){
    return(
        <>
        <nav>
        <Link to="/">Homepage</Link>
        &nbsp; | &nbsp;
        <Link to="/about">About</Link>
        &nbsp; | &nbsp;
 
     
       </nav>
       </>
    )
}



