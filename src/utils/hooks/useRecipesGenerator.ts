import { useStore } from "../../store";
import DumplingRecipe from "../Classes/DumplingRecipe";
import generateRecipeIngredients from "./useRecipesHelpers/generateRecipeIngredients";
import generateRecipeInstructions from "./useRecipesHelpers/generateRecipeInstructions";

const useRecipesGenerator = () => {
  const {
    dumplingName,
    dumplingNotes,
    dough,
    filling,
    ingredients,
    generatedDumplingImage,
    setRecipe,
    setIsLoadingRecipe,
  } = useStore();

  const generateDumplingRecipe = async () => {
    setIsLoadingRecipe(true);
    try {
      const recipeIngredients = await generateRecipeIngredients({
        dough,
        filling,
        ingredients,
        notes: dumplingNotes,
      });

      const recipeInstructions = await generateRecipeInstructions({
        recipeIngredients,
        dough,
        filling,
        notes: dumplingNotes,
      });

      const DumplingRecipeInstance = new DumplingRecipe(
        dumplingName,
        generatedDumplingImage,
        JSON.parse(`${recipeIngredients}`),
        JSON.parse(`${recipeInstructions}`).recipeInstructions
      );
      setRecipe(DumplingRecipeInstance);
      return DumplingRecipeInstance;
    } catch (error) {
      console.error("Błąd podczas generowania przepisu:", error);
    } finally {
      setIsLoadingRecipe(false);
    }
  };

  return generateDumplingRecipe;
};

export default useRecipesGenerator;
