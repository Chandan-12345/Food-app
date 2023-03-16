import * as t from "../type"
const main = (state = {
    Proudcts : [],
    CartItems : [],
    addedItems:[],
    incrementQuantity : [],
    quantity: 0
  
}, action) =>{
  
switch(action.type){
  
  
case t.ALL_PRODUCT : 
console.log(action.payload , "redu");
return {
    ...state,
    Proudcts : action.payload
}


case t.ADD_TO_CART : 

console.log(action.payload, "caaaaaaaaaaaaarrrrrrrrt");
const existingCartItem = state.CartItems.find(item => item.id === action.payload.id);
if (existingCartItem) {
  return {
    ...state,
    cartItems: state.CartItems.map(item =>
      item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
    )
  };
} else {
  return {
    ...state,
    CartItems: [...state.CartItems, {...action.payload, quantity: 1}]
  };
}




case t.ADD_QUANTITY:
 console.log(action.payload, "action.payload.idaction.payload.id");
 return {
  ...state,
  CartItems: state.CartItems.map(item =>
    item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
  )
};


//  state.incrementQuantity.push(action.payload)
//  let inCarts = state.incrementQuantity
//       return { ...state, 
//         incrementQuantity: inCarts };


    case t.SUB_QUANTITY:
      return {
        ...state,
        products: state.CartItems.map(product =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product,
        ),
      };
    case t.EMPTY_CART:
      return {
        ...state,
        products: state.CartItems.map(product =>
          product.selected
            ? {...product, selected: false, quantity: 1}
            : product,
        ),
      };

default : 
return  state
};

}

export default main