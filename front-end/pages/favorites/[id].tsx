import {NextPage} from "next";
import Favorite from "@/components/pages/Favorite/Favorite";

const FavouritePage:NextPage= props =>{
    return(
       <Favorite {...props}/>
    )
}

export default FavouritePage;