import Header from "./Header";
import Footer from "./Footer";
import FaveListItem from "./FaveListItem";
import { useSelector, useDispatch } from 'react-redux';
import {
   favouriteList
  } from './Homepage';

export default function Favourites(props){
    // console.log("favourite List in Favourites", favouriteList)
    // console.log("props in faves", props)
    // console.log("propsfave", props.favouriteList)
    return (
        <>
        <Header />
        <h3 className="faves">Favourite Jokes</h3>
        <ul>
 

        </ul>
        <Footer />
        </>
    )
}