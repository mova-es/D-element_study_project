import { createStore } from "zustand/vanilla"
import { immer } from "zustand/middleware/immer"
import { persist, createJSONStorage, devtools } from "zustand/middleware"

const useCartStore = createStore()(devtools(immer(persist((set, get) => ({
        products: [],
        addToCart: (id) => set({ products: get().products.push(id) }),
        deleteFromCart: (id) => set({ products: get().products.filter(item => item !== id) })
      }),{
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage), 
      }
    )
  )))
  const { getState, setState, subscribe } = useCartStore
export default useCartStore