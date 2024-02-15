import Link from 'next/link';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';

export const Product = ({ product }) => (
  <ItemStyles>
    <img src={product.photo?.image?.publicUrlTransformed} alt={product.name} />
    <Title>
      <Link href={`/product/${product.id}`}>{product.name}</Link>
    </Title>
    <PriceTag>{formatMoney(product.price)}</PriceTag>
    <p>{product.description}</p>
    <div className="buttonList">
      <Link
        href={{
          pathname: '/update',
          query: { id: product.id },
        }}
      >
        Edit ✏️
      </Link>
      <DeleteProduct id={product.id}>Delete</DeleteProduct>
    </div>
  </ItemStyles>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      image: PropTypes.shape({
        publicUrlTransformed: PropTypes.string.isRequired,
      }),
    }),
  }),
};
