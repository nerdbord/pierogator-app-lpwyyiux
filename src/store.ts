import create from "zustand";
import DumplingRecipe from "./utils/Classes/DumplingRecipe";

interface StoreState {
  isLoadingImage: boolean;
  dough: string;
  filling: string;
  fillingLockView: boolean;
  doughLockView: boolean;
  ingredients: string;
  ingredientsLockView: boolean;
  isLoadingDumplings: boolean;
  isLoadingRecipe: boolean;
  setIsLoadingRecipe: (isLoadingRecipe: boolean) => void;
  setIsLoadingImage: (isLoadingImage: boolean) => void;
  setIsLodingForDumplings: (isLoadingDumplings: boolean) => void;
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
  recipe: DumplingRecipe | null;
  setRecipe: (recipe: DumplingRecipe) => void;
  previewedDumpling: DBRecipe | null;
  setPreviewedDumpling: (previewedDumplingRecipe: DBRecipe) => void;
}

export const useStore = create<StoreState>((set) => ({
  isLoadingImage: false,
  dough: "",
  doughLockView: false,
  filling: "",
  ingredients: "",
  ingredientsLockView: false,
  fillingLockView: false,
  isLoadingDumplings: false,
  isLoadingRecipe: false,
  setIsLoadingRecipe: (isLoadingRecipe: boolean) => set({ isLoadingRecipe }),
  setIsLodingForDumplings: (isLoadingDumplings: boolean) => set({ isLoadingDumplings }),
  setIsLoadingImage: (isLoadingImage: boolean) => set({ isLoadingImage }),
  setIngredientsLockView: (ingredientsLockView: boolean) => set({ ingredientsLockView }),
  setIngredients: (ingredients: string) => set({ ingredients }),
  setFillingLockView: (fillingLockView: boolean) => set({ fillingLockView }),
  setFilling: (filling: string) => set({ filling }),
  setDoughLockView: (doughLockView: boolean) => set({ doughLockView }),
  setDough: (dough: string) => set({ dough }),
  generatedDumplingImage: "",
  setGeneratedDumplingImage: (image: string) => set({ generatedDumplingImage: image }),
  dumplingName: "",
  setDumplingName: (dumplingName: string) => set({ dumplingName }),
  dumplingNotes: "",
  setDumplingNotes: (dumplingNotes: string) => set({ dumplingNotes }),
  recipe: null,
  setRecipe: (recipe: DumplingRecipe) => set({ recipe }),
  previewedDumpling: null,
  setPreviewedDumpling: (previewedDumpling: DBRecipe) => set({ previewedDumpling }),
}));

type DBRecipe = DumplingRecipe & {
  _id: number;
};
