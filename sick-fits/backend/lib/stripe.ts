/* eslint-disable @typescript-eslint/no-unsafe-call */
import Stripe from 'stripe';

const stripeConfig: Stripe = new Stripe(process.env.STRIPE_SECRET || '', {
  apiVersion: '2020-08-27',
});

export default stripeConfig;
