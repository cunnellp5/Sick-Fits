/* eslint-disable react/jsx-no-bind */
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import nProgress, { set } from 'nprogress';
import { useState } from 'react';
import styled from 'styled-components';
import SickButton from './styles/SickButton';

const CheckoutFromStyles = styled.div`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    // 1. stop form from submitting, turn loader on
    e.preventDefault();
    setLoading(true);

    // 2. start the page transition
    nProgress.start();

    // 3. create the payment method via stripe (token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    // 4. handle any errors from stripe
    if (error) {
      setError(error);
    }
    // 5. send the token from step 3 to our keystone server via a custom mutation
    // 6. change the page to view the order
    // 7. close the cart
    // 8. turn the loader off
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFromStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      <CardElement />
      <SickButton type="button">Check out now</SickButton>
    </CheckoutFromStyles>
  );
}

export default function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

// TODO DEBUG BUTTON
