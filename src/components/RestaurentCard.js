

import { CDN_URL } from "../utils/constant";


  const RestrauntCard = (props)=>{
    const {name,cuisines,cloudinaryImageId,avgRating,costForTwo}=props.resData
    return( 
        <div className="res-card">
            
            <img
             className="res-logo"
             alt="res-logo"
             src={CDN_URL+cloudinaryImageId}>
             </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo} for two</h4>
        </div>
    )
}

export default RestrauntCard;