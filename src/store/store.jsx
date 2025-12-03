import { create } from 'zustand'

export const useStore = create((set) => ({
  entities: [],
  page: 1,
  fetchEntities: async (page = 1) => {
    const limit = 6
    const offset = (page - 1) * limit

    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`)
    const data = await res.json()
    
    set({ entities: data.products, page })
  }
}))
