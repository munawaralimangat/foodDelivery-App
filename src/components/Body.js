import { useEffect, useState } from "react";
import RestrauntCard from "./RestaurentCard";
import Shimmer from "./Shimmer";


const Body = ()=> {
  const [listOfRestaurents,setState] = useState([]);
  const [searchText,setStext] = useState('')
  const [filteredRestaurents,setFiltered] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const data = await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json()
    let restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    setState(restaurants)
    setFiltered(restaurants)
    
    }

    return listOfRestaurents.length===0 ? <Shimmer/>: (

    <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="searchBox" value={searchText} onChange={(e)=>{setStext(e.target.value)}}/>
            <button onClick={()=>{
              const searchedRes = listOfRestaurents.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFiltered(searchedRes)
            }}>Search</button>
          </div>
            <button className="filter-btn" onClick={()=>{
              const listUpdated = listOfRestaurents.filter( (res) => res.info.avgRating>4.5 )
              setFiltered(listUpdated)
            }}>Top rated Restraunts</button>
        </div>
            <div className="res-container">
                {
                    filteredRestaurents.map((restaurent,index)=>{
                        return <RestrauntCard key={ restaurent.info.id } resData={restaurent.info} />
                    })
                }
            </div>
    </div>
    )
}


export default Body;
