import React, { useState } from 'react';
import "./LoginPopup.css"
import { loginJs, loginPop , loginJsfalse} from '../../Redux/actions/main';
import Login from '../../pages/Login/Login';
import SignupForm from '../Signup/SignupForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
const LoginPopup = ({ onClose }) => {
  const dispatch = useDispatch();
const navigate = useNavigate();

const [modalIsOpen, setModalIsOpen] = useState(false);
const [signUpPopup, setSignUpPopup] = useState(false)

const openModal = () => {
  setModalIsOpen(true);
};

const closeButton = () => {
  setModalIsOpen(false);
};

const openSignUpModal = () =>{
  setSignUpPopup(true)
}


// const logpop = (props) => {
//   dispatch(loginJs(true));
//   dispatch(loginJsfalse(false))
// }

//   const loginjsModal = useSelector((state) => state.main.loginjsModal);
//   console.log(loginjsModal, "loginjsModalpop");
//  const loginpopup = useSelector((state) => state.main.loginpopup);


  return (
    <>
    
      <div className="popup1">
    
    <div className="popup-content">
      <p>You must be logged in to add items to the cart</p>
      {/* <p>Please <span onClick={() => }>login</span> or <span onClick={() => navigate("./Signup")}>sign up</span>to continue</p> */}
      <button onClick={openModal} className='loginpop'>Login</button>
      <Modal show={modalIsOpen} >
                      <Modal.Header closeButton onClick={onClose}>
                        <div className="signText"> Login </div>
                      </Modal.Header>
                      <Modal.Body>
                        <Login  />
                      </Modal.Body>
                    </Modal>


                    <button onClick={openSignUpModal} className='loginpop'>Sign Up</button>
      <Modal show={signUpPopup} >
                      <Modal.Header closeButton onClick={onClose}>
                        <div className="signText"> Sign Up </div>
                      </Modal.Header>
                      <Modal.Body>
                        <SignupForm  />
                      </Modal.Body>
                    </Modal>

      <button className='errpopup' onClick={onClose}>Close</button>
    </div>
  </div>


    </>
  );
}

export default LoginPopup;