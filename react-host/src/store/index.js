import PubStore from "zustand-pub";
import { create } from "zustand";

const pubStore = new PubStore("key");

const platformStore = pubStore.defineStore("useStore", (set) => ({
  count: 0,
  isLoading: false,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
  add: () => set((state) => ({ count: state.count + 1 })),
  reduce: () => set((state) => ({ count: state.count - 1 })),
  setLoading: (state) => set(() => ({ isLoading: state })),
}));

const usePlatformStore = create(platformStore);
export default usePlatformStore;
