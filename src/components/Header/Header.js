import React,{useState, useEffect} from "react";
import { BsCartPlusFill } from 'react-icons/bs';

import "./Header.css";
import {  useSelector } from "react-redux";
import CartProducts from "../Cart/CartProducts";

const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);


  const [showcartPopup, setShowCartPopup] = useState(false);


  const handleCartButtonClick = () =>{
    setShowCartPopup(!showcartPopup);
  }

  const myCart = useSelector((state) => state.main.CartItems)
  console.log(myCart.quantity, "ppppppp");

  const totalCount = useSelector((state) => state.main.total)
  console.log(parseInt(totalCount) ,"opopo");

//   let sum = 0;

//   // loop over the array and add up the values
//   for(let i = 0; i < myCart.length; i++) {
//     sum += myCart[i].price;
//   }
// console.log(parseInt(sum), "sumsumseum");
  

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (position > 100) {
        setNavbarBackground('#fff'); // Change to whatever color you want
        setIsNavbarFixed(true);
      } else {
        setNavbarBackground('#ffd929');
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navbarStyle = {
    position: isNavbarFixed ? 'fixed' : 'static',
    top: 0,
    width: '100%',
    paddingTop: 26,
    paddingBottom : 26,
    backgroundColor: navbarBackground,
    display : "flex",
    justifyContent : "center"
    // Add any other styles you need for your navbar
  };

  return (
    <>


     <header >
     <div style={navbarStyle}>
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <div className="header-content">
            <div className="headerlogo">chromato</div>

            <div className="rightContent">
              <div className="loginText"  >LOG IN</div>
              
              <div className="signupText">SIGN UP</div>
            
             <div className="cartValues">
             <span className="myCart">{myCart.length}</span>
             <div className="addtocart" onMouseEnter={handleCartButtonClick}><BsCartPlusFill />
             {showcartPopup && <CartProducts items={myCart} />}
               </div>
               
             </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
     </header>




    </>
  );
};

export default Header;
