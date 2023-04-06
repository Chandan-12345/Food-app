import * as t from "../type"
const main = (state = {
    Products : [
      {
          id : 1,
          name : "Iced Lychee Green Tea",
          price : 99,
          btn : "Add To Cart",
          image : "/food1.jpg",
          type : "drinks",
          quantity : 1
      },
      {
          id : 2,
          name : "Mini Mocha Cheese Muffin",
          price : 39,
          btn : "Add To Cart",
          image : "/food2.jpg",
          type : "deserts",
          quantity : 1
      },
      {
          id : 3,
          name : "Spaghetti Bolognese",
          price : 199,
          btn : "Add To Cart",
          image : "/food3.jpg",
          type:"Western",
          quantity : 1
      },
      {
          id : 4,
          name : "Sweet & Sour Chicken",
          price : 299,
          btn : "Add To Cart",
          image : "/food4.jpg",
          type : "chinese",
          quantity : 1
      },
      {
          id : 5,
          name : "Iced Lychee Green Tea",
          price : 254,
          btn : "Add To Cart",
          image : "/food5.jpg",
          type : "drinks",
          quantity : 1
      },
      {
          id: 6,
          name : "Mini Mocha Cheese Muffin",
          price : 39,
          btn : "Add To Cart",
          image : "/food6.jpg",
          type : "deserts",
          quantity : 1
      },
      {
          id: 7,
          name : "Spaghetti Bolognese",
          price : 99,
          btn : "Add To Cart",
          image : "/food7.jpg",
          type : "Western",
          quantity : 1
      },
      {
          id: 8,
          name : "Sweet & Sour Chicken",
          price : 159,
          btn : "Add To Cart",
          image : "/food8.jpg",
          type : "chinese",
          quantity : 1
      },
    
      {
          id: 9,
          name : "Iced Lychee Green Tea",
          price : 259,
          btn : "Add To Cart",
          image : "/food9.jpg",
          type : "drinks",
          quantity : 1
          
      },
      {
          id: 10,
          name : "Mini Mocha Cheese Muffin",
          price : 39,
          btn : "Add To Cart",
          image : "/food10.jpg",
          type : "deserts",
          quantity : 1
      },
      {
          id: 11,
          name : "Spaghetti Bolognese",
          price : 149,
          btn : "Add To Cart",
          image : "/food11.jpg",
          type : "Western",
          quantity : 1
      },
      {
          id: 12,
          name : "Sweet & Sour Chicken",
          price : 49,
          btn : "Add To Cart",
          image : "/food12.jpg",
          type : "chinese",
          quantity : 1
      },
      {
          id: 13,
          name : "Iced Lychee Green Tea",
          price : 39,
          btn : "Add To Cart",
          image : "/food13.jpg",
          type : "drinks",
          quantity : 1
      },
      {
          id: 14,
          name : "Mini Mocha Cheese Muffin",
          price : 99,
          btn : "Add To Cart",
          image : "/food14.jpg",
          type : "deserts",
          quantity : 1
      },
      {
          id: 15,
          name : "Spaghetti Bolognese",
          price : 169,
          btn : "Add To Cart",
          image : "/food15.jpg",
          type : "Western",
          quantity : 1
      },
      {
          id: 16,
          name : "Sweet & Sour Chicken",
          price : 159,
          btn : "Add To Cart",
          image : "/food16.jpg",
          type : "chinese",
          quantity : 1
      }
    ]
  
  ,
    CartItems : [],
    addedItems:[],
    incrementQuantity : [],
    quantity: 0,
    productDetails : "",
    isLoggedIn : false,
    loginData : "",
    loginpopup : false,
    loginjsModal : false
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
const { id } = action.payload;
      const existingCartItem = state.CartItems.find(item => item.id === id);
      if (existingCartItem) {
        const updatedCartItems = state.CartItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, CartItems: updatedCartItems };
      } else {
        const newCartItem = { ...action.payload, quantity: 1 };
        return { ...state, CartItems: [...state.CartItems, newCartItem] };
      }




case t.ADD_QUANTITY:
 console.log(action.payload, "action.payload.idaction.payload.id");
 return {
  ...state,
  CartItems: state.CartItems.map(item =>
    item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
  )
};

// case t.SET_SELECTED_PRODUCT : 
// console.log(action.payload, "action.payloadaction.payload-----");
// {
//   return {
//     productDetails : action.payload,
//   }
// }
//  state.incrementQuantity.push(action.payload)
//  let inCarts = state.incrementQuantity
//       return { ...state, 
//         incrementQuantity: inCarts };


    case t.SUB_QUANTITY:
      return {
        ...state,
        CartItems: state.CartItems.map(product =>
          product.id === action.payload.id
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

      case t.REMOVE_ITEM_FROM_CART:
        console.log(action.payload, "action.payload.id");
      return {
        ...state,
        CartItems: state.CartItems.filter((item) => item.id !== action.payload)
      };

case t.LOGINDATA :
console.log(action.payload, "loginDataloginData@@@");
let allLoginData = action.payload;
console.log(allLoginData, "iooioioioio");
// localStorage.setItem('user', JSON.stringify((allLoginData)))

return {
  ...state,
  loginData : allLoginData
}


case t.LOGIN : 
console.log(action.payload, "loginnnnnnnnnnnn");
return {
...state,
isLoggedIn : true
}

case t.LOGOUT : 
console.log(action.payload, "logout");
return {
...state,
CartItems : []
}

case t.LOGINPOPUP :
 console.log( action.payload,"<<>><><><><><>IIIIIIIIIIIIIIIIIIIIII");
  return {
    ...state,
    loginpopup : action.payload,
  }

  case t.LOGINJS : 
  console.log(action.payload, "loginjs reducer");

  return {
    ...state,
    loginjsModal : action.payload
  }
 
  case t.LOGINPOPUPFALSE:
  if(state.loginjsModal){
    return {
      ...state,
      loginpopup : false
    }
  }

// if(state.loginjsModal){
//   return {
//     ...state,
//     loginpopup :false,
//      }

// }  else{
//   return {
//     ...state,
  
//   }
// }




default : 
return  state
};

}

export default main