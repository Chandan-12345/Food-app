import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { addToCart, loginPop } from "../../Redux/actions/main";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import "./ProductDetail.css";
import LoginPopup from "../Hero/LoginPopup";



const ProductDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  const allProductDetail = useSelector((state) => state.main.Proudcts);
  var myCarts = useSelector((state) => state.main.CartItems);

const loginModal = useSelector((state) => state.main.loginpopup)
console.log(loginModal, "loginPopupinproductloginPopupinproduct1");

  const { productId } = useParams();
  console.log(productId, "id");
  const thisProduct = allProductDetail?.find((prod) => prod.id == productId);
  console.log(thisProduct, "[[[[[[[[[[[");

  const mytotalCart = (products) => {
    const itemTotal = myCarts
      .filter((item) => item.id === products.id)
      .reduce((total, item) => total + item.quantity, 0);

    return itemTotal;
  };

  const addToCartProduct = (product) => {
    dispatch(addToCart(product));
  };
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() =>{
    onAuthStateChanged(auth, (user) =>{
      
      if(user){
        setUserData(user)
      }else{
        setUserData(null)
      }
    })
  })


  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <button className="backbtn" onClick={goBack}>
            {" "}
            <MdOutlineArrowBackIosNew size={18} />
            BACK TO MENU
          </button>

          <div className="row productDetail">
            <div className="col-md-6">
              <div>
                <img
                  className="detailImg"
                  src={thisProduct.image}
                  width="100% "
                  height="800"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="productsPage">{thisProduct.name}</div>

              <p>
                Price: {thisProduct.price}
                {"\u20B9"}
              </p>

              {userData ? (<button
                className="cartDetailbtn"
                onClick={() => {
                  dispatch(addToCart(thisProduct));
                }}
              >
                Add to cart
              </button>) : <button
                className="cartDetailbtn"
               onClick={() => {dispatch(loginPop(true))}}
              >
                Add to cart
              </button>}
          {loginModal && <LoginPopup  onClose={() => dispatch(loginPop(false))}/>}
              <span>
                {" "}
                {mytotalCart(thisProduct) > 0 && (
                  <span className="cartCount">
                    {mytotalCart(thisProduct)}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default ProductDetail;
