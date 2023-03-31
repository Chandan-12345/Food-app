import React from "react";
import { useSelector } from "react-redux";
import StripeContainer from "../../components/stripeContainers";




const Cart = () =>{
const items = useSelector((state) => state.main.CartItems);
console.log(items, 'items');

    return(
        <>
<StripeContainer shippingFee={40} items = {items} />
        </>
    )
}

export default Cart