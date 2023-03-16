import './App.css';
import Home from "../src/pages/Home/Home"
import SignupForm from './components/Signup/SignupForm';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProducts from './components/Cart/CartProducts';


function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route index element={<Home></Home>}></Route>
    <Route path='/SignUp' element={<SignupForm />} />

    <Route path='/Cart' element={<CartProducts />} />
    <Route  path='Home/:productId' element={<ProductDetail />}> </Route>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
