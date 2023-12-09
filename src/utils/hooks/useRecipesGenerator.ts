import { useStore } from "../../store";
import generateRecipeIngredients, { Ingredient } from "./useRecipesHelpers/generateRecipeIngredients";
import generateRecipeInstructions, { Instructions } from "./useRecipesHelpers/generateRecipeInstructions";

interface DumplingRecipe {
  name: string;
  imageSrc: string;
  ingredients: {
    dough: Ingredient[];
    filling: Ingredient[];
  };
  instructions: Instructions;
}

const useRecipesGenerator = () => {
  const { dumplingName, dough, filling, ingredients, generatedDumplingImage, setIngredientsRecipe } = useStore();
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

    const DumplingRecipe: DumplingRecipe = {
      name: dumplingName,
      imageSrc: generatedDumplingImage,
      ingredients: JSON.parse(`${recipeIngredients}`),
      instructions: JSON.parse(`${recipeInstructions}`),
    };
    console.log(DumplingRecipe);
    return DumplingRecipe;
  };

  return generateDumplingRecipe;
};

export default useRecipesGenerator;
