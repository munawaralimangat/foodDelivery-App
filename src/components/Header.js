
import { useEffect, useState } from 'react';
 import {LOGO_URL} from '../utils/constant'

const Header = ()=>{
    const [heading,setHeading] = useState("FOOD BAZAR")
    let [btnName,changeBtn] = useState('Login')
    const toggleHeading = () => {

        setHeading(heading=="FOOD BAZAR" ? "food bazar" : "FOOD BAZAR");
    };

    useEffect(()=>{
        console.log('hh')
    },[btnName])
    
return (
    <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL} ></img>
        </div>
        <h1 onClick={toggleHeading} className={heading=="FOOD BAZAR"? "red": "black"}>{heading}</h1>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                <button onClick={()=>{btnName==='Login'?changeBtn('Logout'):changeBtn('Login')}} className='login'>{btnName}</button>
            </ul>
        </div>
    </div>
        )   
}

export default Header;
