import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {  myProducts ,addToCart} from "../../Redux/actions/main";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {

  const myCarts = useSelector((state) => state.main.CartItems)
  console.log(myCarts, "kkkkppppppppppppppppp1");
  const [currentType, setCurrentType] = useState("");
  const [data, setData] = useState([]);

  const mystate = useSelector((state) => state.main);
  console.log(mystate.count, "ttttttttttt");
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
const cartProduct = useSelector((state) => state.main.CartItems)

console.log(cartProduct, "cartProductcartProduct");


const  quantityItems = useSelector((state) => state.main.quantityItems)

console.log(quantityItems, "quantityItemsquantityItems");





  const addToCartProduct = (product) => {
    dispatch(addToCart(product));
    console.log("dsssssssssssss");
  };

  const allProduct = async () => {
    try {
      const result = await axios.get("http://localhost:3000/Products");

      const allPro = result.data;
      setData(allPro);
      dispatch(myProducts(allPro));
      console.log(allPro, "<<<<<");
    } catch (error) {
      console.log(error, "sdfsdf");
    }
  };

  const filteredProducts =
    currentType === "" ? data : data.filter((p) => p.type === currentType);

  console.log(filteredProducts, "gggggggggggg");

  const Products = filteredProducts.map((products) => (
   
    <div className="col-md-3 allcon" key={products.id}>
      <div className="youcontent">
      <Link to={`/Home/${products.id}`}>
        <img src={products.image} alt="img" height="200" width="200" />
        <div className="productName"> {products.name}</div>
        <div className="productPrice">
          
          <string name="Rs">{"\u20B9"}</string>
          {products.price}
        </div>
        </Link>
        <div>
          <button
            onClick={() =>{addToCartProduct(products)}}
            className="cartBtn"
          >
            Add to cart
          </button>

          {/* <h3>
           {products.name}
          </h3> */}
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
      {console.log(Products, "oooooop")}

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row mainconst">{Products}</div>
        </div>

        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default Hero;
