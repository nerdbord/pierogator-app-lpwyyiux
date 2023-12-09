import axios from "axios";
import { ingredients } from "./generateRecipeIngredients";

export interface Instructions {
  dough_preparation: string[];
  filling_preparation: string[];
  forming_and_cooking_dumplings: string[];
  serving: string[];
}

export interface GenerateRecipeInstructions {
  recipeIngredients: ingredients;
  dough: string;
  filling: string;
  notes: string;
}

export default async function generateRecipeInstructions({
  recipeIngredients,
  dough,
  filling,
  notes,
}: GenerateRecipeInstructions): Promise<Instructions> {
  const requestData = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You have to generate object called recipeInstructions based on interface Instructions, here are listed interfaces you need to know: 
          interface Instructions {
            dough_preparation: string[];
            filling_preparation: string[];
            forming_and_cooking_dumplings: string[];
            serving: string[];
          }

          interface Ingredient {
            name: string;
            quantity: string;
          }

          interface ingredients {
            dough: Ingredient[];
            filling: Ingredient[];
          }

          User will provide you dough as a string (user prompt for dough, it could be some basic instructions, dough that user would like to knead), filling as a string (user prompt for filling, it could be filling name with food properties like tasty, dry, etc), ingredients based on ingredients interface (list of ingredients from which filling, and dough will be made, every ingredient should me mentioned in the instructions), and notes as a string (they may contain information how user would like the food to be made, for example in microwave, or quickly).
          Whilst creating dough_preaparation take into account only data in ingredients.dough, dough (to know what user wishes to knead), and notes (for suggestions, maybe how they wish to do this).
          Whilst creating filling_preparation take into account only data in ingredients.filling, filling and notes (for suggestions, maybe they'll have information how user wishes to do this).
          Whilst creating forming_and_cooking_dumplings take into account user notes, dough, filling.
          Whilst creating serving just generate whether it would be better to serve it warm/hot/cold, and give some encouragement, e.g. 'Bon appettit!'.
          Return only JSON of code of recipeInstructions object.
        `,
      },
      {
        role: "user",
        content: `dough: ${dough}, filling: ${filling}, ingredients: ${recipeIngredients}, notes: ${notes}`,
      },
    ],
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
  };

  return axios
    .post("https://training.nerdbord.io/api/v1/openai/chat/completions", requestData, { headers })
    .then((response) => {
      // console.log("Response:", response.data.choices[0].message.content);
      return response.data.choices[0].message.content;
    })
    .catch((error) => {
      console.error("Error:", error.response ? error.response.data : error.message);
    });
}
