import { createContext, useState } from "react";

export const DropdownContext = createContext({});

export const DropdownProvider = ({ children }) => {

    const [currentStat, setCurrentStat] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const newItems = [];
        let found = false;
        cartItems.forEach(item => {
            if (item.id === product.id) {
                item.cnt += 1;
                found = true;
            }
            newItems.push(item);
        })
        if (!found)
            newItems.push({ ...product, cnt: 1 });
        setCartItems(newItems);
    }

    const removeFromCart = (product) => {
        const newItems = [];
        cartItems.forEach(item => {
            if (item.id === product.id)
                item.cnt -= 1;
            if (item.cnt)
                newItems.push(item);
        })
        setCartItems(newItems);
    }

    const deleteFromCart = (product) => {
        const newItems = cartItems.filter(item => item.id !== product.id)
        setCartItems(newItems);
    }

    const value = {
        currentStat,
        setCurrentStat,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart
    };

    return (<DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>)
}