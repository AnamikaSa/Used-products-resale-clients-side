import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51M9Z5GAEVI0KCATyyujjueOwluPvzZUwAgrjv2VyHubK3wTSFYCdyaei6Pi2sk4PaijhjJUF1ydC33atQVjOWS0900i3Qm86uz');

const Payment = () => {
    const booking = useLoaderData();
    
    const { productName,Username,bookingDate,price} = booking;
    
    return (
        <div>
            <h3 className="text-3xl">Payment for {productName}</h3>
            <p className="text-2xl">Your Placement date: {bookingDate}</p>
            <p className="text-xl">Your Name: {Username}</p>
            <br/>
            <p><p className="text-xl">price: {price}</p></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;