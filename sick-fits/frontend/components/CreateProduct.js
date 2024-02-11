import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!',
  });

  return (
    <form>
      <label htmlFor="name">
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
        price
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
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        reset Form
      </button>
    </form>
  );
}
