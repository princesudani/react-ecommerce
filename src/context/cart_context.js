import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

const getLocalCartDate = () => {
  let CartData = localStorage.getItem("Cart");
  if (CartData === []) {
    return [];
  } else {
    return JSON.parse(CartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartDate(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // add localstoreage
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
