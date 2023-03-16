import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductDetail.css"

const ProductDetail = () => {
const navigate = useNavigate();

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
<button className="backbtn" onClick={goBack}>BACK TO MENU</button>

<div className="row">
<div className="col-md-6">
<div >
        <img className="detailImg" src={thisProduct.image} width="100% " height="800" />
      </div>
</div>
    <div className="col-md-6">
    <h1>{thisProduct.name}</h1>
    
      <p>
        Price: {thisProduct.price}
        {"\u20B9"}
      </p>

      <button className="cartDetailbtn">Add to cart</button>
    </div>

</div>
</div>

      <div className="col-md-2"></div> 

     </div>

    </>
  );
};

export default ProductDetail;
