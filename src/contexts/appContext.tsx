import React, { createContext, useEffect, useState } from "react";
import type { AppContextType, Product, AppProviderProps, CartItem } from "./contextTypes";

export const AppContext = createContext<AppContextType>({
    products: [],
    sideBar: {
        isFalse: null,
        setIsOpen: () => { },
        handleClose: () => { }
    },
    cart: {
        cart: [],
        addToCart: () => { },
        removeFromCart: () => { },
        clearCart: () => { },
        increaseAmount: () => { },
        decreaseAmount: () => { },
        itemAmount: 0,
        total: 0,
    },
});

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false)
    }
    const sideBar = {
        isFalse: isOpen,
        setIsOpen: setIsOpen,
        handleClose: handleClose
    }
    useEffect(() => {

        const fetchproducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data: Product[] = await response.json();

                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        }
        fetchproducts();
    }, []);

    // ----------------
    // Cart State
    // ----------------
    const [cart, setCart] = useState<CartItem[]>([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
        setTotal(total);
    }, [cart]);

    useEffect(() => {
        const amount = cart.reduce((acc, item) => acc + item.amount, 0);
        setItemAmount(amount);
    }, [cart]);

    const addToCart = (product: Product, id: number) => {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem) {
            const newCart = cart.map((item) =>
                item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
            );
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };


    const removeFromCart = (id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const increaseAmount = (id: number) => {
        const item = cart.find((item) => item.id === id);
        if (item) {
            addToCart(item, id);
        }
    };

    const decreaseAmount = (id: number) => {
        const item = cart.find((item) => item.id === id);
        if (item) {
            if (item.amount < 2) {
                removeFromCart(id);
            } else {
                const newCart = cart.map((i) =>
                    i.id === id ? { ...i, amount: i.amount - 1 } : i
                );
                setCart(newCart);
            }
        }
    };

    const cartContext = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
    };

    return (
        <AppContext.Provider value={{ products, sideBar, cart: cartContext }} >
            {children}
        </AppContext.Provider>
    );

}

export default AppProvider;