import React from 'react'
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './Payments.js';

const PUBLIC_KEY = "pk_test_51MmXpJSHbbg0aRSGCOgVKCqpkA5H3lHSaNgIGXOrzF4HzLkhZNfuOSpPq6f141TdiVATyls5ovfK7epWawduWahZ00KGYCmBF9"

const stripTestPromise = loadStripe(PUBLIC_KEY);


export default function StripeContainer(props) {
    return (
        <div>
            <Elements stripe = {stripTestPromise}>
                <PaymentForm {...props} />

            </Elements>
        </div>
    )
}