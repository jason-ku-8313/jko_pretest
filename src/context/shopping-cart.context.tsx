import { ReactNode, createContext, useState } from "react";
import { ShoppingCart } from "../shared/interface";

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

type Props = {
  children: ReactNode;
};

export interface ShoppingCartContextType {
  shoppingCart: ShoppingCart;
  updateCartItem: (productId: string, specId: string, quantity: number) => void;
}

export default function ShoppingCartProvider({ children }: Props) {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({ items: [] });

  const updateCartItem = (
    productId: string,
    specId: string,
    quantity: number
  ) => {
    setShoppingCart(({ items }) => {
      const clone = [...items];
      const existing = clone.find(
        (item) => item.productId === productId && item.specId === specId
      );

      if (!!existing) {
        existing.quantity = quantity;
      } else {
        clone.push({ productId, specId, quantity });
      }
      return { items: clone };
    });
  };
  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, updateCartItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
