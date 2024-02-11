import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  const handleChange = (event) => {
    const { value, name, type } = event.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value[0] = event.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.keys(inputs).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setInputs(blankState);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
