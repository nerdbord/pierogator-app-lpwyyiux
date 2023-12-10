import { useStore } from "../../store";
import DumplingRecipe from "../Classes/DumplingRecipe";
import generateRecipeIngredients from "./useRecipesHelpers/generateRecipeIngredients";
import generateRecipeInstructions from "./useRecipesHelpers/generateRecipeInstructions";

const useRecipesGenerator = () => {
  const { dumplingName, dumplingNotes, dough, filling, ingredients, generatedDumplingImage, setRecipe} = useStore();
  const generateDumplingRecipe = async () => {
    // last one === uwagi
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
    const DumplingRecipeInstance = new DumplingRecipe(dumplingName, generatedDumplingImage, JSON.parse(`${recipeIngredients}`), JSON.parse(`${recipeInstructions}`),
    );
    setRecipe(DumplingRecipeInstance)
    return DumplingRecipeInstance;
  };

  return generateDumplingRecipe;
};

export default useRecipesGenerator;
