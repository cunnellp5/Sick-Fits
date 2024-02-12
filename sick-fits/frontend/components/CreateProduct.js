import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $description: String!
    $image: Upload
    $name: String!
    $price: Int!
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!',
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // submit the input fields to the backend; inputs is preloaded with the default values because of the useMutation hook
        await createProduct();
        clearForm();
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            id="image"
            name="image"
            onChange={handleChange}
            required
            type="file"
          />
        </label>
        <label htmlFor="image">
          Name
          <input
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            required
            type="text"
            value={inputs.name}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            onChange={handleChange}
            placeholder="Price"
            required
            type="number"
            value={inputs.price}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            placeholder="Description"
            required
            type="text"
            value={inputs.description}
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
