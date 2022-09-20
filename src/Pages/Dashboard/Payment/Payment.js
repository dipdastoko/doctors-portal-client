import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LgI42Cg6MihJhLWJ9ZYJcDJnvesCigAKHQU75joOvbZX8lKqe1VkBqbtUvWucAZeIK82lf10blZuKougPJ4oPaN00pNFWJ8pO');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>

            {
                appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;

/* 
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-------
5. Create payment method
6. server create payment Intent api
7. Load client secret
8. Confirmed payment
9. handle user error
*/