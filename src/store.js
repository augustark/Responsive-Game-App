import create from "zustand";

const useStore = create((set) => ({
  isDark: false,
  navOverlay: false,
  toggleDarkMode: () => 
    set((state) => ({isDark: !state.isDark})),
  toggleNavOverlay: (bool) => 
    set((state) => ({ navOverlay: bool || false }))
}))

export default useStore