import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity, loginPop, subtractQuantity } from "../../Redux/actions/main";
import Checkout from "../Checkout/Checkout";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import "./Cart.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import LoginPopup from "../Hero/LoginPopup"
import Login from "../../pages/Login/Login";

const CartProducts = ({ items, setShowlogin, setShowCartPopup }) => {
  console.log(setShowlogin, "cart");
  const [user, setUser] = useState(null);

  console.log(items, "{{{}}}");
  const dispatch = useDispatch();
  const navigate = useNavigate();


const loginpopup = useSelector((state) => state.main.loginpopup)
console.log(loginpopup, "loginpopupcart");

const goCheckout = () => {
  if(!user){
    console.log("error");
    
   setShowlogin(true)
   setShowCartPopup(false)
    return
  }else{
    navigate("./Checkout")
  }
   
  
}
  const myTotal = items.reduce(
    (total, item) => total + parseInt(item.price) * item.quantity,
    0
  );

  const allitems = useSelector((state) => state.main.CartItems);
  console.log(allitems, "allitemsallitems");

  const numberofItems = allitems.reduce((acc, item) => acc + item.quantity, 0)
  console.log(numberofItems, "numberofItems");


    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUser(user)
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          setUser(null)
          console.log("user is logged out")
        }
      });
     
}, [])
    return (
      <>

{numberofItems ? ( <div className="cart-popup">
          <div className="box">
            {items.map((item) => (
              <div className="cartContents" key={item.id}>
                <div className="cartImg">
                  <img
                    src={item.image}
                    alt="cartImg"
                className="cartImage"
                  />
                </div>
                <div className="cartname">
                  {" "}
                  {item.name}
                  <div className="productQuantity">
                    {" "}
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
                  {item.price * item.quantity}{" "}
                  <string name="Rs">{"\u20B9"}</string>
                </div>
              </div>
            ))}
            <hr />
            <div className="AllTotal">
              <div className="allval">
                <div className="subtotal">Subtotal</div>
                <div>
                  {" "}
                  {myTotal} <string name="Rs">{"\u20B9"}</string>
                </div>
              </div>
  
              <div className="allval">
                <div> Delivery Charge</div>
                <div>
                  40 <string name="Rs">{"\u20B9"}</string>
                </div>
              </div>
              <hr />
  
              <div className="CartTotal">
                <div>Total</div>
                <div>
                  {myTotal + 40} <string name="Rs">{"\u20B9"}</string>
                </div>
              </div>
            </div>
  
  
            <button className="chekbtn" onClick={goCheckout}>Proceed To checkout</button>
            
          </div>
        </div>) : (<EmptyCart />)}


       
      </>
    );
  
  
};

export default CartProducts;
