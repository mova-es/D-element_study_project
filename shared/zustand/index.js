import { createStore } from "zustand/vanilla"
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = createStore(persist((set, get) => ({
        ProductsArray: [],
        addItemToCart: () => set({ array: get().array.push() }),
        deleteItemFromCart: () => set({ array: get().array.splice() })
      }),{
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage), 
      }
    )
  )
const { getState, setState, subscribe } = useCartStore
export default useCartStore