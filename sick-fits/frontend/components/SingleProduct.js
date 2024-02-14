import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import PropType from 'prop-types';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default function SingleProduct({ id }) {
  const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });

  //   this is becoming undefined randomly
  //   const { Product } = data;

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {data.Product.name}</title>
      </Head>
      <img
        src={data.Product.photo.image.publicUrlTransformed}
        alt={data.Product.name}
      />
      <div className="details">
        <h2>{data.Product.name}</h2>
        <p>{data.Product.description}</p>
      </div>
    </ProductStyles>
  );
}

SingleProduct.propTypes = {
  id: PropType.string.isRequired,
};
