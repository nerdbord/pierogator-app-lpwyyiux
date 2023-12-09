import { Ingredient } from "../hooks/useRecipesHelpers/generateRecipeIngredients";
import { Instructions } from "../hooks/useRecipesHelpers/generateRecipeInstructions";

export default class DumplingRecipe implements DumplingRecipe {
  name: string;
  imageSrc: string;
  ingredients: {
    dough: Ingredient[];
    filling: Ingredient[];
  };
  instructions: Instructions;

  constructor(
    name: string,
    imageSrc: string,
    ingredients: { dough: Ingredient[]; filling: Ingredient[] },
    instructions: Instructions
  ) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

// Example usage:
export const sampleDumplingRecipe = new DumplingRecipe(
  "",
  "",
  {
    dough: [],
    filling: [],
  },
  {
    dough_preparation: [],
    filling_preparation: [],
    forming_and_cooking_dumplings: [],
    serving: [],
  }
);
