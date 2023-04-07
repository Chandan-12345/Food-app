import { Elements } from "@stripe/react-stripe-js";
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { subtractQuantity, addQuantity, removeItemFromCart } from "../../Redux/actions/main";
import { MdOutlineArrowBackIosNew } from "react-icons/md";


import "./Checkout.css"
const Checkout = () => {
  //   const [paymentCompleted, setPaymentCompleted] = useState(false);
  //  const stripePromise = loadStripe("pk_test_51MmXpJSHbbg0aRSGCOgVKCqpkA5H3lHSaNgIGXOrzF4HzLkhZNfuOSpPq6f141TdiVATyls5ovfK7epWawduWahZ00KGYCmBF9")
    const dispatch = useDispatch();
  //  const successMessage = () => {
  //       return (
  //         <div className="success-msg">
  //           <div className="title">Payment Successful</div>
  //         </div>
  //       )
  //     }


const navigate = useNavigate();
    const items = useSelector((state) => state.main.CartItems);
    console.log(items, "--==");

    const myTotal1 = items.reduce(
        (total, item) => total + parseInt(item.price) * item.quantity,
        0
      );

      const DeliveryCharge = items.length > 0 ? 40 : 0;

     const  TotalQuantity =  items.reduce(
      (total, item) => total  + item.quantity,
      0
    );

    const goHome = () =>{
      navigate(-1)
    }
    
    return(
        <>
          <div className="row">

<div className="chkecoutHeader">

    <div className="backBtn" onClick={() => navigate(-1)} ><MdOutlineArrowBackIosNew size="25px" /> TO MENU</div>
    <h3 onClick={goHome} className="alit">𝙕𝙒𝙄𝙂𝘼𝙏𝙊</h3>
</div>


<div className="col-md-2"></div>
<div className="col-md-8 chekscroll">
<div className="row">

            <div className="cart-page">
        <div className="cartbox">
        <div className="cartnumbers">
<p className="yourCarts">Your Order</p>
<div className="numberofItems">{TotalQuantity} Items</div>
</div>
          {items.map((item) => (
            <div className="cartContents" key={item.id}>
              <div className="cartImg">
                <img
                  src={item.image}
                  alt="cartImg"
                 className="checkoutImage"
                />
              </div>
              <div className="cartname">
                {item.name}
                <div className="productQuantity">
                  <span
                    className="decProduct"
                    onClick={() => {
                      dispatch(subtractQuantity(item));
                    }}
                  >
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    className="decProduct"
                    onClick={() => {
                      dispatch(addQuantity(item));
                    }}
                  >
                    +
                  </span>
                </div>
              </div>

              <div className="cartPrice">
                <div>
                {item.price * item.quantity}{" "}
                <string name="Rs">{"\u20B9"}</string>
                </div>
                <div><button className="removeItem" onClick={() => dispatch(removeItemFromCart(item.id))}>Remove</button></div>
              </div>
            </div>
          ))}
          <hr />
          


        </div>

        <div className="AllTotal">
            <div className="allval">
              <div className="subtotal">Subtotal</div>
              <div>
                {myTotal1} <string name="Rs">{"\u20B9"}</string>
              </div>
            </div>

            <div className="allval">
              <div> Delivery Charge</div>
              <div>
                {DeliveryCharge} <string name="Rs">{"\u20B9"}</string>
              </div>
            </div>
            <hr />

            <div className="CartTotal">
              <div>Total</div>
              <div>
                { myTotal1 + DeliveryCharge} <string name="Rs">{"\u20B9"}</string>
              </div>
            </div>

            
          </div>
          <div>
                <button className="checkoutBtn" onClick={() => navigate("./newCart")} >Proceed to checkout</button>
            </div>
      </div>
</div>

</div>
<div className="col-md-2"></div>
          </div>

        </>
    )
}

export default Checkout