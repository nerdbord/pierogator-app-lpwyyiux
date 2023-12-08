import create from "zustand";

interface StoreState {
  dough: string;
  filling: string;
  fillingLock: boolean;
  doughLock: boolean;
  ingredients: string;
  ingredientsLock: boolean;
  setIngredientsLock: (ingredientsLock: boolean) => void;
  setIngredients: (ingredients: string) => void;
  setFillingLock: (fillingLock: boolean) => void;
  setFilling: (filling: string) => void;
  setDoughLock: (doughLock: boolean) => void;
  setDough: (dough: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  dough: "",
  doughLock: false,
  filling: "",
  ingredients: "",
  ingredientsLock: false,
  fillingLock: false,
  setIngredientsLock: (ingredientsLock: boolean) => set({ ingredientsLock }),
  setIngredients: (ingredients: string) => set({ ingredients }),
  setFillingLock: (fillingLock: boolean) => set({ fillingLock }),
  setFilling: (filling: string) => set({ filling }),
  setDoughLock: (doughLock: boolean) => set({ doughLock }),
  setDough: (dough: string) => set({ dough }),
}));
