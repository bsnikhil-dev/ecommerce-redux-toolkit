// contextTypes.ts
import type { ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export interface sideBarProps {
  isFalse: boolean | null;
  setIsOpen: (value: boolean) => void;
  handleClose: () => void;
}

export type AppProviderProps = {
  children: ReactNode;
};

export interface CartItem extends Product {
  amount: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  itemAmount: number;
  total: number;
}

export interface AppContextType {
  products: Product[],
  sideBar: sideBarProps,
  cart: CartContextType;
};
