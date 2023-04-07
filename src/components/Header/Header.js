import React, { useState, useEffect } from "react";
import { BsCartPlusFill } from "react-icons/bs";

import "./Header.css";
import { useSelector } from "react-redux";
import CartProducts from "../Cart/CartProducts";
import SignupForm from "../Signup/SignupForm";
import Modal from "react-bootstrap/Modal";
import Login from "../../pages/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../Cart/EmptyCart";
import { logoutUser } from "../../Redux/actions/main";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [showlogin, setShowlogin] = useState(false);
  const [showcartPopup, setShowCartPopup] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
const dispatch = useDispatch();


  // const allitems = useSelector((state) => state.main.CartItems);
  // console.log(allitems, "allitemsallitems");

  // const numberofItems = allitems.reduce((acc, item) => acc + item.quantity, 0)
  // console.log(numberofItems, "numberofItems");

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        setIsLoggedIn(false);
        dispatch(logoutUser(false))
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setShowlogin(false)
  };

  const showloginPopup = () => {
    setShowlogin(true);
  };

  const handlelogClose = () => setShowlogin(false);

  const handleCartButtonClick = () => {
    setShowCartPopup(!showcartPopup);
  };

  const myCart = useSelector((state) => state.main.CartItems);
  console.log(myCart, "ppppppp");

  const mytatalCartItems = myCart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (position > 100) {
        setNavbarBackground("#fff"); // Change to whatever color you want
        setIsNavbarFixed(true);
      } else {
        setNavbarBackground("#ffd929");
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const navbarStyle = {
    position: isNavbarFixed ? "fixed" : "static",
    top: 0,
    width: "100%",
    paddingTop: 26,
    paddingBottom: 26,
    backgroundColor: navbarBackground,
    display: "flex",
    justifyContent: "center",
    // Add any other styles you need for your navbar
  };

  return (
    <>
      <header>
        <div style={navbarStyle}>
          <div className="col-md-1"></div>

          <div className="col-md-10">
            <div className="header-content">
              <div className="headerlogo">𝘡𝘞𝘐𝘎𝘈𝘛𝘖</div>

              <div className="rightContent">
              

                <div className="loginText">
                {props.name ? `${props.name}` :  <div  onClick={showloginPopup}>
               Login
                </div>} 
                </div>
            { showlogin && (
                  <>
                    <Modal show={showlogin} onHide={handlelogClose}>
                      <Modal.Header closeButton>
                        <div className="signText"> Login </div>
                      </Modal.Header>
                      <Modal.Body>
                        <Login closebtn={handlelogClose} showlog={showloginPopup} showbtn = {handleShow}  />
                      </Modal.Body>
                    </Modal>
                  </>
                )}

                <div>
                  {props.name ?(
                    <div className="signupText"  onClick={handleLogout}>Logout</div>
                  ) : (
                    <div className="signupText" onClick={handleShow}>
                      Sign Up
                    </div>
                  )}
                </div>

                {show && (
                  <>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <div className="signText"> Sign up</div>
                      </Modal.Header>
                      <Modal.Body>
                        <SignupForm onButtonClick={handleClose} />
                      </Modal.Body>
                    </Modal>
                  </>
                )}

                <div className="cartValues">
                  <span className="myCart">{mytatalCartItems}</span>
                  <div
                    className="addtocart"
                    onMouseEnter={handleCartButtonClick}
                  >
                    <BsCartPlusFill />
                    { showcartPopup && <CartProducts items={myCart} setShowlogin = {setShowlogin} setShowCartPopup={setShowCartPopup} />}
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
