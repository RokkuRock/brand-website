import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart () {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity (id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems((currItems) => {
          const existingItem = currItems.find((item) => item.id === id);
          if (existingItem == null) {
            return [...currItems, { id, quantity: 1 }];
          } else {
            return currItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
        });
      }
      

      function decreaseCartQuantity(id: number) {
        setCartItems((currItems) => {
          const existingItem = currItems.find((item) => item.id === id);
          if (existingItem?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
          }
        });
      }

    function removeFromCart (id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider 
        value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
