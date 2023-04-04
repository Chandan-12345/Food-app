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


export const removeItemFromCart = (id) => (dispatch) =>{
    console.log(id, "itemIditemId");
    dispatch({type : t.REMOVE_ITEM_FROM_CART, payload :id })
}



export const setSelectedProduct = (selectedproduct) => (dispatch) =>{
    console.log(selectedproduct, "selectedproductselectedproduct");
    dispatch({type : t.SET_SELECTED_PRODUCT , payload : selectedproduct})
}

export const loginData = (loginData) => (dispatch) => {
    console.log(loginData, "LOGINIsuser");
    dispatch({type : t.LOGINDATA, payload: loginData})
}


export const loginUser = (Isuser) => (dispatch) => {
    console.log(Isuser, "LOGINIsuser");
    dispatch({type : t.LOGIN, payload : Isuser})
}

export const logoutUser = (Isuser) => (dispatch) => {
    console.log(Isuser, "Isuser");
    dispatch({type : t.LOGOUT, payload : Isuser})
}