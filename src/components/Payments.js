import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

import "./Payments.css";

let orders = [];
const placeOrder = (data) => {
  orders.push(data);
  console.log(orders, "oredr");
  // const allordermsg = axios.post(`${process.env.REACT_APP_API_URL}/orders`,data)
  const allordermsg = axios.post(`http://localhost:5000/orders`, data);
 
};


export default function PaymentForm(props) {
const navigate = useNavigate();

  console.log(props.shippingFee, "shippingFeeshippingFee");
  console.log(process.env.REACT_APP_API_URL, "====");
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const items = useSelector((state) => state.main.CartItems);
  console.log(items, "pppp000000000");

  const dispatch = useDispatch();
  const total =
    items?.reduce(
      (total, item) => parseInt(total) + parseInt(item.price * item.quantity),
      0
    ) + 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        console.log(id, "idididid");
        // let response;
        placeOrder(
          {
            id,
            items: props.items,
            shippingFee: props.shippingFee,
          },
          setSuccess(true)
          // () => {
          //   setSuccess(true);
          // }
         
        );
       
       
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const TotalItems = items.reduce((total, item) => total + item.quantity, 0);

  const deliveycharg = items.length > 0 ? 40 : 0;

  // const  TotalQuantity =  items.reduce((total, item) => total  + item.quantity, 0);
const gotoHome = () =>{
  navigate(-2)
}
  return (
    <>
    <div className="cardContainer">
    <div className="chkecoutHeader">

<div className="backBtn" onClick={() => navigate(-1)} ><MdOutlineArrowBackIosNew size="25px" /> TO MENU</div>
<h3 onClick={gotoHome} className="alit">𝙕𝙒𝙄𝙂𝘼𝙏𝙊</h3>
</div>

      {!success ? (
        <div className="row paycard">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-5 ">
              <div className="card">
                <div className="paymentcard1">
                  <div className="font-barlow font-semibold">Payment </div>
                  <div className="font-barlow text-gray-100 my-2">
                    Add credit / debit card
                  </div>

                  <form onSubmit={handleSubmit} className="">
                    <fieldset className="paymentcard">
                      <div className="">
                        <div className="h-10   rounded-md border border-gray flex items-center px-2 myfirld">
                          <CardNumberElement />
                        </div>
                        <div className="flex justify-between  mt-6">
                          <div className="h-10 w-48%  rounded-md border border-gray flex items-center px-2 myfirld">
                            <CardExpiryElement />
                          </div>
                          <div className="h-10 w-48% rounded-md border border-gray flex items-center px-2 myfirld">
                            <CardCvcElement />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <button className="payButton">
                      Pay {total + deliveycharg === 0 ? "" :(total + deliveycharg )  }{"\u20B9"}
                    </button>
                  </form>
                </div>
                </div>
              </div>
<div className="col-md-2"></div>
              <div className="col-md-5 cartItemsList">
                
                  <div className="pay-page">
                

                  <div className="cartnumbers">
<p className="yourCarts">Your Order</p>
<div className="numberofItems">{TotalItems} Items</div>
</div>
                    <div className="cartbox1">
                      {items.map((item) => (
                        <div className="cartCheckout" key={item.id}>
                          <div className="cartname">{item.name}</div>
                          <div className="cartPrice cartImg">x{item.quantity}</div>

                          <div className="endItem cartImg">
                            {item.price * item.quantity}{" "}
                            <string name="Rs">{"\u20B9"}</string>
                          </div>
                        </div>
                      ))}
                      <hr />
                      <div className="TotalPay">
                        <div className="allval">
                          <div className="subtotal">Subtotal</div>
                          <div>
                            {total} <string name="Rs">{"\u20B9"}</string>
                          </div>
                        </div>

                        <div className="allval">
                          <div> Delivery Charge</div>
                          <div>
                          {deliveycharg} <string name="Rs">{"\u20B9"}</string>
                          </div>
                        </div>
                        <hr />

                        <div className="CartTotal">
                          <div>Total</div>
                          <div>
                            {total + deliveycharg} <string name="Rs">{"\u20B9"}</string>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
            </div>

          <div className="col-md-1"></div>
        </div>
      ) : (
        <div>
          <p className="font-barlow-semi-condensed">
            Order placed successfully!
          </p>
        </div>
      )}
    </div>

    </>
  );
}
