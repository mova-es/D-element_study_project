import { createStore } from "zustand/vanilla"
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = createStore(persist((set, get) => ({
        productsArray: [],
        addToCart: () => set({ productsArray: get().productsArray.push() }),
        deleteFromCart: () => set({ productsArray: get().productsArray.splice() })
      }),{
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage), 
      }
    )
  )
  const { getState, setState, subscribe, addTocart, deleteFromCart } = useCartStore
export default useCartStore