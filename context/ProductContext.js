import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../utils/api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 1000,
  });
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    switch (sortOption) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [filters, sortOption, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ProductContext.Provider
      value={{
        products: currentProducts,
        filters,
        setFilters,
        sortOption,
        setSortOption,
        currentPage,
        setCurrentPage,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
