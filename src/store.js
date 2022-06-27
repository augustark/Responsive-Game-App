import create from "zustand";

const useStore = create((set) => ({
  isDark: false,
  toggleDarkMode: () => 
    set((state) => ({isDark: !state.isDark}))
}))

export default useStore