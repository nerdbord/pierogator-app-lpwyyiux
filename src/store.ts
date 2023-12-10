import create from "zustand";
import DumplingRecipe, { sampleDumplingRecipe } from "./utils/Classes/DumplingRecipe";

interface StoreState {
  isLoading: boolean;
  dough: string;
  filling: string;
  fillingLockView: boolean;
  doughLockView: boolean;
  ingredients: string;
  ingredientsLockView: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setIngredientsLockView: (ingredientsLockView: boolean) => void;
  setIngredients: (ingredients: string) => void;
  setFillingLockView: (fillingLockView: boolean) => void;
  setFilling: (filling: string) => void;
  setDoughLockView: (doughLockView: boolean) => void;
  setDough: (dough: string) => void;
  generatedDumplingImage: string;
  setGeneratedDumplingImage: (image: string) => void;
  dumplingName: string;
  setDumplingName: (name: string) => void;
  dumplingNotes: string;
  setDumplingNotes: (dumplingNotes: string) => void;
  recipe: DumplingRecipe;
  setRecipe: (recipe: DumplingRecipe) => void;
}

export const useStore = create<StoreState>((set) => ({
  isLoading: false,
  dough: "",
  doughLockView: false,
  filling: "",
  ingredients: "",
  ingredientsLockView: false,
  fillingLockView: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIngredientsLockView: (ingredientsLockView: boolean) =>
    set({ ingredientsLockView }),
  setIngredients: (ingredients: string) => set({ ingredients }),
  setFillingLockView: (fillingLockView: boolean) => set({ fillingLockView }),
  setFilling: (filling: string) => set({ filling }),
  setDoughLockView: (doughLockView: boolean) => set({ doughLockView }),
  setDough: (dough: string) => set({ dough }),
  generatedDumplingImage: "",
  setGeneratedDumplingImage: (image: string) =>
    set({ generatedDumplingImage: image }),
  dumplingName: "",
  setDumplingName: (dumplingName: string) => set({ dumplingName }),
  dumplingNotes: "",
  setDumplingNotes: (dumplingNotes: string) => set({ dumplingNotes }),
  recipe: sampleDumplingRecipe,
  setRecipe: (recipe: DumplingRecipe) => set({ recipe }),
}));
