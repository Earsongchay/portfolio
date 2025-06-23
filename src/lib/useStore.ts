import { create } from "zustand";

type Store = {
  route: string;
  routeChange: (route: string) => void;
};

export const useStore = create<Store>()((set) => ({
  route: "project",
  routeChange: (r: string) => set((state) => ({ ...state, route: r })),
}));
