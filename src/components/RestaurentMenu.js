
import { useEffect } from "react";

const RestaurentMenu = ()=>{
    useEffect(()=>{
        fetchMenu()
    })

    const fetchMenu = async ()=>{
        const data = await fetch('https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=')
        const json = data.json()
        console.log(json)
    }
    return(
        <div>
            <h1>HELLO RestaurentCard</h1>
        </div>
    )
}

export default RestaurentMenu;