import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const ALL_PRODUCTS_QUERY = gql`
  {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        {data.allProducts.map((product) => {
          return (
            <div key={product.id}>
              <img
                src={product.photo.image.publicUrlTransformed}
                alt={product.name}
              />
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
