import React from "react";
import AppNavigator from "./AppNavigator";
import { ProductProvider } from "./context/ProductContext";

export default function App() {
  return (
    <ProductProvider>
      <AppNavigator />
    </ProductProvider>
  );
}
