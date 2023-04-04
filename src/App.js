import './App.css';
import Home from "../src/pages/Home/Home"
import SignupForm from './components/Signup/SignupForm';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProducts from './components/Cart/CartProducts';
import Checkout from './components/Checkout/Checkout';
import Payments from './components/Payments/Payments';
import Cart from './pages/cart/Cart';
import Login from './pages/Login/Login';
import { useState,useEffect } from 'react';
import { auth } from './firebase';
import Fetch from './components/Cart/Fetch';


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user, "useruseruser");
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
 <BrowserRouter>
  <Routes>
    <Route index element={<Home   name={userName} />}></Route>
    <Route path='/SignUp' element={<SignupForm />} />
    <Route path='/Login' element={<Login><SignupForm /> </Login>}  />
    <Route path='/Cart' element={<CartProducts />} />
    <Route  path='Home/:productId' element={<ProductDetail />}> </Route>
    <Route path='/checkout' element={<Checkout />}  />
    <Route path='/checkout/Payments' element={<Payments />}  />
    <Route path='/checkout/newCart' element={<Cart />} />
    {/* <Route path='/Fetch' element={<Fetch />} /> */}
  </Routes>
 </BrowserRouter>
  );
}

export default App;
