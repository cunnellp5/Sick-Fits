import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import { useUser } from './User';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import calcTotalPrice from '../lib/calcTotalPrice';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => {
  console.log(cartItem);
  if (!cartItem.product) return null;

  return (
    <CartItemStyles>
      <img
        width="100"
        src={cartItem.product.photo.image.publicUrlTransformed}
        alt={cartItem.product.name}
      />
      <div>
        <h3>{cartItem.product.name}</h3>
        <p>
          {formatMoney(cartItem.product.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(cartItem.product.price)}{' '}
            each
          </em>
        </p>
      </div>
    </CartItemStyles>
  );
};

export default function Cart() {
  const me = useUser();

  if (!me) return null;

  console.log(me, 'carvalue');

  return (
    <CartStyles open>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
      </footer>
    </CartStyles>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
