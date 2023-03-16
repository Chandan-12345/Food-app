import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity } from "../../Redux/actions/main";
import "./Cart.css";

const CartProducts = ({ items }) => {

  const dispatch = useDispatch();

 const myTotal = items.reduce((total, item)=>total+(parseInt(item.price)),0)

 const myIncresecarts = useSelector((state) => state.main.cartItems)
 console.log(myIncresecarts,"myIncresecartsmyIncresecarts");



  return (
    <>
      <div className="cart-popup">
        <div className="box">
          {items.map((item) => (
            <div className="cartContents" key={item.id}>
              <div className="cartImg">
                <img
                  src={item.image}
                  alt="cartImg"
                  height="100px"
                  width="100px"
                />
              </div>
              <div className="cartname"> {item.name} 
              
             <div className="productQuantity"> <span className="decProduct">-</span>
              <span></span>
              <span className="decProduct" onClick={() => {dispatch(addQuantity(item))}}>+</span></div>
              </div>

              <div className="cartPrice">{item.price} <string name="Rs">{"\u20B9"}</string></div>
            </div>
          
           
          ))}
<hr />
          <div className="AllTotal">
            <div className="allval">
            <div className="subtotal">Subtotal</div>
           <div> {myTotal} <string name="Rs">{"\u20B9"}</string></div>
            </div>

            <div className="allval">
             <div> Delivery Charge</div>
             <div>40 <string name="Rs">{"\u20B9"}</string></div>
            </div>
            <hr />

            <div className="CartTotal">
              <div>Total</div>
              <div>{myTotal + 40} <string name="Rs">{"\u20B9"}</string></div>
            </div>
          </div>
        </div>

        
      </div>



      
    </>
  );
};

export default CartProducts;
