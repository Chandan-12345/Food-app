import React from "react";
import { BsFillBagXFill } from 'react-icons/bs';
import "./Emptycart.css"
const EmptyCart = () =>{
    return(
        <>
            <div className="box">
           <div className="emptycartItems">
           <div className="bagcolor">
           <BsFillBagXFill  size={80} fill="green"/>
           </div>
           <h2>Your Bag is Empty</h2>
           <div className="smalltexts">Start adding meals</div>
           </div>
            </div>
        </>
    )
}

export default EmptyCart;