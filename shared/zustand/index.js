import { createStore } from "zustand/vanilla"
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = createStore(persist((set, get) => ({
        productsArray: [],
        addItemToCart: () => set({ productsArray: get().productsArray.push() }),
        deleteItemFromCart: () => set({ productsArray: get().productsArray.splice() })
      }),{
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage), 
      }
    )
  )
  const { getState, setState, subscribe } = useCartStore
export default useCartStore