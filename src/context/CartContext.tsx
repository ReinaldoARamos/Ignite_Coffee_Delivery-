import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../Pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee{
    quantity: number;
}

interface CartContextType{
cartItems: CartItem[]
}

interface CartContextProviderProps{
    children: ReactNode; 
} 

export const CartContext = createContext({} as CartContextType)

export function  CartContextProvider({children} : CartContextProviderProps ) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function addCoffeeToCart(coffee: CartItem) {
         const coffeeAlreadyExistInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)
    }
    return(
        <CartContext.Provider value={{cartItems}}>
            {children}
        </CartContext.Provider>
    )
}