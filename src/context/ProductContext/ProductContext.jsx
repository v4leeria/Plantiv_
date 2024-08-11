import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../../config/axiosInstance";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token enviado:", token);
      const response = await axios.get("/store/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error en buscar los productos:", error);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await axios.post("/store/products", product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error("Error al agregar un producto", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
