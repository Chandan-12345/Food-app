import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { myProducts, addToCart } from "../../Redux/actions/main";
import { Link } from "react-router-dom";
import "./Hero.css";
import { Products } from "./ProductList";


 



const Hero = () => {
  var myCarts = useSelector((state) => state.main.CartItems);
  console.log(myCarts, "myCarts");

//Get all products from store
  var AllProducts = useSelector((state) => state.main.Products)
  console.log(AllProducts, "myProducts");


  const [currentType, setCurrentType] = useState("");
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
 const addToCartProduct = (product) => {
    dispatch(addToCart(product));

  };

  const allProduct = async () => {
    try {
      // const result = await axios.get("http://localhost:3000/Products");

      // const allPro = result.data;
      setData(AllProducts);
      dispatch(myProducts(AllProducts));
    } catch (error) {
      console.log(error);
    }
 

  };

  const Products =
    currentType === "" ? data : data.filter((p) => p.type === currentType);

const mytotalCart = (products) => {
 const itemTotal = myCarts
  .filter((item) => item.id === products.id) 
  .reduce((total, item) => total + item.quantity, 0); 

  return itemTotal
  };

  const Products1 = Products.map((products) => (
    <div className="col-md-3 allcon" key={products.id}>
        <div className="productContent">
        <Link to={`/Home/${products.id}`} style={{color : "unset", textDecoration : "none", fontFamily : "sans-serif"}} id="linkProp">
          <img className="imgproduct" src={products.image} alt="img"  />
          <div className="productName"> {products.name}
          <div className="productPrice">
            <string name="Rs">{"\u20B9"}</string>
            {products.price}
          </div>
          </div>
        </Link>
        <div>
         <div className="btnsection">
        <button
            onClick={() => {
              addToCartProduct(products);
            }}
            className="cartBtn"
          >
            Add to cart 
          </button>
          <span> {mytotalCart(products) > 0  && (
          <span className="cartCount">{mytotalCart(products)}</span>

          )}</span>
      
      
         </div>

        </div>
        </div>
    </div>
  ));

  useEffect(() => {
    allProduct();
  }, []);

  return (
    <>
      <div>
        <img className="coverImg" src="/homeImg.png" alt="img" />
      </div>

      <div className="allCategory">
        <div className="allProduct">
          <button
            onClick={() => setCurrentType("")}
            className={currentType == "" ? " catbtn catbtnActive" : "catbtn"}
          >
            All
          </button>
        </div>

        <div className="allProduct">
          <button
            onClick={() => setCurrentType("chinese")}
            className={
              currentType == "chinese" ? " catbtn catbtnActive" : "catbtn"
            }
          >
            Chinese
          </button>
        </div>

        <div className="allProduct">
          <button
            onClick={() => setCurrentType("deserts")}
            className={
              currentType == "deserts" ? " catbtn catbtnActive" : "catbtn"
            }
          >
            Deserts
          </button>
        </div>

        <div className="allProduct">
          <button
            onClick={() => setCurrentType("drinks")}
            className={
              currentType == "drinks" ? " catbtn catbtnActive" : "catbtn"
            }
          >
            Drinks
          </button>
        </div>

        <div className="allProduct">
          <button
            onClick={() => setCurrentType("Western")}
            className={
              currentType == "Western" ? " catbtn catbtnActive" : "catbtn"
            }
          >
            Western
          </button>
        </div>
      </div>

      <hr />
      {console.log(Products1, "oooooop")}

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row mainconst">{Products1}</div>
        </div>

        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default Hero;
