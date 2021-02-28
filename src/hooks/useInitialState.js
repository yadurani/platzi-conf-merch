import { useState } from 'react';

import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const { cart } = state;
    const isExist = cart.some((product) => product.id === payload.id);
    if (isExist) {
      const resultCart = cart.map((product) => {
        if (product.id === payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return { ...product };
      });
      setState((prevState) => ({
        ...prevState,
        cart: [...resultCart],
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        cart: [...prevState.cart, { ...payload, quantity: 1 }],
      }));
    }
  };

  const removeFromCart = (payload) => {
    const { quantity, id } = payload;
    if (quantity > 1) {
      setState((prev) => ({
        ...prev,
        cart: prev.cart.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return { ...product };
        }),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        cart: prev.cart.filter((item) => item.id !== id),
      }));
    }
  };

  const addToBuyer = (payload) => {
    console.log(payload);
    setState((prevState) => ({
      ...prevState,
      buyer: [...state.buyer, payload],
    }));
  };

  const addNewOrder = (payload) => {
    setState((prevState) => ({
      ...prevState,
      orders: [...state.orders, payload],
    }));
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
