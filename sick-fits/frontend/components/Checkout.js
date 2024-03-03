/* eslint-disable react/jsx-no-bind */
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';
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

export default function Checkout() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('wip');
  }

  return (
    <Elements stripe={stripeLib}>
      <CheckoutFromStyles onSubmit={handleSubmit}>
        <CardElement />
        <SickButton>Check out now</SickButton>
      </CheckoutFromStyles>
    </Elements>
  );
}
