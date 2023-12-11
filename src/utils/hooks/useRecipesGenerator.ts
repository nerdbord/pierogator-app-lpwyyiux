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
    isLoadingRecipe,
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
      let ri;
      try {
        ri = JSON.parse(`${recipeInstructions}`);
      } catch (e) {
        try {
          const regex = /```typescript([\s\S]+?)```/;
          ri = regex.exec(`${recipeInstructions}`);
        } catch (e) {
          const regex = /```json([\s\S]+?)```/;
          ri = regex.exec(`${recipeInstructions}`);
        }
      }
      try {
        const DumplingRecipeInstance = new DumplingRecipe(
          dumplingName,
          generatedDumplingImage,
          JSON.parse(`${recipeIngredients}`),
          Object.hasOwn(ri, "recipeInstructions") ? ri.recipeInstructions : ri
        );

        setRecipe(DumplingRecipeInstance);
        return DumplingRecipeInstance;
      } catch (e) {
        const recipeInstructions = await generateRecipeInstructions({
          recipeIngredients,
          dough,
          filling,
          notes: dumplingNotes,
        });
        const ri = JSON.parse(`${recipeInstructions}`);
        const DumplingRecipeInstance = new DumplingRecipe(
          dumplingName,
          generatedDumplingImage,
          JSON.parse(`${recipeIngredients}`),
          Object.hasOwn(ri, "recipeInstructions") ? ri.recipeInstructions : ri
        );
        // if it didn't got interrupted by e.g. changing page
        if (isLoadingRecipe) setRecipe(DumplingRecipeInstance);
        return DumplingRecipeInstance;
      }
    } catch (error) {
      console.error("Błąd podczas generowania przepisu:", error);
    } finally {
      setIsLoadingRecipe(false);
    }
  };

  return generateDumplingRecipe;
};

export default useRecipesGenerator;
