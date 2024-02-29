import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // closed by default
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        closeCart,
        openCart,
        setCartOpen,
        toggleCart,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// custom Hook
function useCart() {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

CartStateProvider.propTypes = {
  children: PropTypes.any,
};

export { CartStateProvider, useCart };
