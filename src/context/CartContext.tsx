import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../Pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee{
    quantity: number;
}

interface CartContextType{
cartItems: CartItem[]
addCoffeeToCart: (coffee : CartItem) => void,
CartQuantity: number
}

interface CartContextProviderProps{
    children: ReactNode; 
} 

export const CartContext = createContext({} as CartContextType)

export function  CartContextProvider({children} : CartContextProviderProps ) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const CartQuantity = cartItems.length

    function addCoffeeToCart(coffee: CartItem) {
         const coffeeAlreadyExistInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id);
         const newCart = produce(cartItems, (draft) => {
            if(coffeeAlreadyExistInCart < 0){
                    draft.push(coffee)
            } else{
                draft[coffeeAlreadyExistInCart].quantity += coffee.quantity
            }
          
           
         })
         setCartItems(newCart);
         console.log(cartItems)
    }
    return(
        <CartContext.Provider value={{cartItems, CartQuantity ,addCoffeeToCart}}>
            {children}
        </CartContext.Provider>
    )
}