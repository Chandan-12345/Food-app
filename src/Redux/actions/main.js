import * as t from "../type"


export const myIncrement = (IncValue) => (dispatch) =>{
    console.log();
    dispatch({type : t.MY_Increment , payload : IncValue})
}

export const myDecrement = (decValue) => (dispatch) =>{
    dispatch({type : t.MY_Decrement, payload : decValue})
}


// export const addToCart = (id) => (dispatch) =>{
//     console.log(id, "LLLL");
//     dispatch({type : t.ADD_TO_CART, payload : id})
// }

export const myProducts = (Proudcts) => (dispatch) =>{
    console.log(Proudcts, "action Proudcts");
    dispatch({type : t.ALL_PRODUCT , payload : Proudcts})
}


export const addToCart = (cartProduct) => (dispatch) =>{
    console.log(cartProduct, "cartId");
    dispatch({type : t.ADD_TO_CART , payload : cartProduct})
}



export const subtractQuantity = (id) => (dispatch) =>{
    console.log(id, "cartId");
    dispatch({type : t.SUB_QUANTITY , payload : id})
}

export const addQuantity = (addQuantityid) => (dispatch) =>{
    console.log(addQuantityid, "addQuantityId");
    dispatch({type : t.ADD_QUANTITY , payload : addQuantityid})
}

export const emptyCart = (id) => (dispatch) =>{
    console.log(id, "emptyCartId");
    dispatch({type : t.EMPTY_CART , payload : id})
}

