import create from "zustand";

interface StoreState {
  dough: string;
  filling: string;
  fillingLockView: boolean;
  doughLockView: boolean;
  ingredients: string;
  ingredientsLockView: boolean;
  setIngredientsLockView: (ingredientsLockView: boolean) => void;
  setIngredients: (ingredients: string) => void;
  setFillingLockView: (fillingLockView: boolean) => void;
  setFilling: (filling: string) => void;
  setDoughLockView: (doughLockView: boolean) => void;
  setDough: (dough: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  dough: "",
  doughLockView: false,
  filling: "",
  ingredients: "",
  ingredientsLockView: false,
  fillingLockView: false,
  setIngredientsLockView: (ingredientsLockView: boolean) =>
    set({ ingredientsLockView }),
  setIngredients: (ingredients: string) => set({ ingredients }),
  setFillingLockView: (fillingLockView: boolean) => set({ fillingLockView }),
  setFilling: (filling: string) => set({ filling }),
  setDoughLockView: (doughLockView: boolean) => set({ doughLockView }),
  setDough: (dough: string) => set({ dough }),
}));
