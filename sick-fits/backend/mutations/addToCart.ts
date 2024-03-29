import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToCart(
  root: any,
  { productId }: { productId: String },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('adding to cart');
  // 1. query the current user and see if they're signed in
  const sesh = context.session as Session;

  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this!');
  }
  // 2. query the current users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: {
      user: {
        id: sesh.itemId,
      },
      product: {
        id: productId,
      },
    },
    resolveFields: 'id, quantity',
  });

  const [existingCartItem] = allCartItems;
  console.log(allCartItems);

  if (existingCartItem) {
    console.log(existingCartItem, '***');
    console.log(
      `This are already ${existingCartItem.quantity}, increment by 1`
    );
    // 3. see if the current item is already in their cart
    // 4. if it is, increment by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }
  // 5. if it isng, create a new cart item
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}

export default addToCart;
