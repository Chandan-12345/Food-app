import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import { addToCart } from "../../Redux/actions/main";
import "./ProductDetail.css"

const ProductDetail = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

  const allProductDetail = useSelector((state) => state.main.Proudcts);

  const { productId } = useParams();
  console.log(productId, "id");
  const thisProduct = allProductDetail?.find((prod) => prod.id == productId);
  console.log(thisProduct, "[[[[[[[[[[[");


  const goBack = () =>{
    navigate(-1)
  }
  return (
    <>
     <div className="row">
<div className="col-md-2"></div> 
<div className="col-md-8">
<button className="backbtn" onClick={goBack}> <MdKeyboardBackspace size={30} />BACK TO MENU</button>

<div className="row">
<div className="col-md-6">
<div >
        <img className="detailImg" src={thisProduct.image} width="100% " height="800" />
      </div>
</div>
    <div className="col-md-6">
    <div className="productsPage">{thisProduct.name}</div>
    
      <p>
        Price: {thisProduct.price}
        {"\u20B9"}
      </p>

      <button className="cartDetailbtn" onClick={() => {dispatch(addToCart(thisProduct.id))}} >Add to cart</button>
    </div>

</div>
</div>

      <div className="col-md-2"></div> 

     </div>

    </>
  );
};

export default ProductDetail;
