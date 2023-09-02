import { createContext, useContext, useEffect, useState } from "react";
import PRODUCTS from '../shop-data.json'
import { UserContext } from "./user.context";

export const ProductContext = createContext({
    products: [],
    setProducts: () => { }
});


export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const val = { products, setProducts };
    return <ProductContext.Provider value={val}>{children}</ProductContext.Provider>
}