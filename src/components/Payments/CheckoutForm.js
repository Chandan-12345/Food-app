// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CardElement, useStripe, useElements ,  CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement, } from '@stripe/react-stripe-js';


//   let orders = [];
// const placeOrder = (data) => {
//   orders.push(data);
//  console.log(orders, "oredr");
// const allordermsg = axios.post(`${process.env.REACT_APP_API_URL}/orders`,data)

// };



// const CheckoutForm = () => {
//   const [success, setSuccess] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//       console.log('Stripe  payment method created:', paymentMethod);
//       // Send the payment method ID to your server to create a charge
      
//       const response = await fetch('/api/payments', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
//       });
//       if (response.ok) {
//         console.log('Payment processed successfully');
//       } else {
//         console.log('Error processing payment');
//       } 
//     }
    
   
    
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset className="">
//               <div className="">
//                 <div className="h-10   rounded-md border border-gray flex items-center px-2">
//                   <CardNumberElement />
//                 </div>
//                 <div className="flex justify-between  mt-6">
//                   <div className="h-10 w-48%  rounded-md border border-gray flex items-center px-2">
//                     <CardExpiryElement />
//                   </div>
//                   <div className="h-10 w-48% rounded-md border border-gray flex items-center px-2">
//                     <CardCvcElement />
//                   </div>
//                 </div>
//               </div>
//             </fieldset>
//       <button disabled={!stripe}>Pay</button>
//     </form>
//   );
// };

// export default CheckoutForm;