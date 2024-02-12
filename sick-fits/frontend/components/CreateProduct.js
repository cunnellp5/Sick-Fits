import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
        clearForm();
      }}
    >
      <fieldset>
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
