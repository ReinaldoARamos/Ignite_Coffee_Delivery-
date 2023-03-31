import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../Pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  CartQuantity: number;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  deleteItemCart: (cartItemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const CartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );
    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistInCart].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);
    console.log(cartItems);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart];
        draft[coffeeExistInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }

  function deleteItemCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistInCart >= 0) {
        draft.splice(coffeeExistInCart, 1)
      }
    });
    setCartItems(newCart);
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        CartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        deleteItemCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
