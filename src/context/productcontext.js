import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const Appcontext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    console.log("products:", products);
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return <Appcontext.Provider>{children}</Appcontext.Provider>;
};

const useProductContext = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, useProductContext };
