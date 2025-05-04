import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";

export default function useProductsContext() {
    return useContext(ProductsContext);
}