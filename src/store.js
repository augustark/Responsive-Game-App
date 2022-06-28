import create from "zustand";
import shallow from "zustand/shallow"
import { featuredParams } from "./utils/fetchApi/gameParams";

const useDarkModeStore = create((set) => ({
  isDark: false,
  toggleDarkMode: () => 
    set((state) => ({isDark: !state.isDark}))
}))

const useDirectoryStore = create((set) => ({
  collection: {
    title: 'Featured',
    body: featuredParams,
    page: 1
  },
  filter: {
    platforms: [],
    genres: []
  },
  sort: {
    option: 'Release Date',
    order: 'desc'
  },
  isPreviousData: false,
  addPlatform: (arr) => set((state) => ({
    filter: {
      ...state.filter,
      platforms: arr
    }
  })),
  addGenre: (arr) => set((state) => ({
    filter: {
      ...state.filter,
      genres: arr
    }
  })),
  setSort: (obj) => set((state) => ({sort: obj})),
  setCollection: (obj) => set((state) => ({collection: obj})),
  setPage: (num) => set((state) => ({
    collection: {
      ...state.collection,
      page: num
    }
  })),
  setIsPrevious: (bool) => set((state) => state.isPreviousData = bool),
  shallow
}))

export { useDarkModeStore, useDirectoryStore }