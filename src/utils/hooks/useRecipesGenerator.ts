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
      notes: "Make it calory efficient, also make it vegan friendly",
    });

    const recipeInstructions = await generateRecipeInstructions({
      recipeIngredients,
      dough,
      filling,
      notes: "Make it calory efficient, also make it vegan friendly, serve it hot",
    });
    const DumplingRecipeInstance = new DumplingRecipe(dumplingName, generatedDumplingImage, JSON.parse(`${recipeIngredients}`), JSON.parse(`${recipeInstructions}`),
    );
    // console.log(dumplingNotes)
    setRecipe(DumplingRecipeInstance)
    return DumplingRecipeInstance;
  };

  return generateDumplingRecipe;
};

export default useRecipesGenerator;
