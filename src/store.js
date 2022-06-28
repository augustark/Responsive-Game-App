import create from "zustand";
import { featuredParams } from "./utils/fetchApi/gameParams";

const useDarkModeStore = create((set) => ({
  isDark: false,
  toggleDarkMode: () => 
    set((state) => ({isDark: !state.isDark}))
}))

const useDirectoryStore = create((set, get) => ({
  collection: {
    title: 'Featured',
    body: featuredParams,
    page: 1
  },
  filter: {
    platforms: [],
    genres: []
  },
  addPlatform: (arr) => set((state) => state.filter.platforms = arr),
  addGenre: (arr) => set((state) => state.filter.genre = arr),
  setCollection: () => set((state) => get())
}))

export { useDarkModeStore, useDirectoryStore }