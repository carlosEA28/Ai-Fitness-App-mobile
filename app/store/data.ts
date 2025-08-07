import { create } from "zustand";

export type User = {
  name: string;
  age: string;
  weight: string;
  height: string;
  level: string;
  goal: string;
  gender: string;
};

type DataState = {
  user: User;
  setPageOne: (data: Omit<User, "gender" | "goal" | "level">) => void;
  setPageTwo: (data: Pick<User, "gender" | "goal" | "level">) => void;
};

export const useDataStore = create<DataState>((set) => ({
  user: {
    name: "",
    age: "",
    goal: "",
    level: "",
    gender: "",
    height: "",
    weight: "",
  },

  setPageOne: (data) => set((state) => ({ user: { ...state.user, ...data } })),
  setPageTwo: (data) => set((state) => ({ user: { ...state.user, ...data } })),
}));
