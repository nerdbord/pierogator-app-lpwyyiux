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
        content: `You have to generate object called recipeInstructions based on interface "Instructions", here are listed typescript interfaces you need to know: 
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
 dough_preparation should contain instructions how to prepare dough provided from user. 
 filling_preparation should contain instructions how to prepare filling provided from user.
 forming_and_cooking_dumplings should contain instructions how to form and cook dumplings from user filling and dough.
 serving should contain information how dumplings should be served to the customers.
 Returned response should contain only recipeInstructions typescript object in JSON format.
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
    Authorization: `${import.meta.env.VITE_REACT_APP_OPENAI_KEY}`,
  };

  return axios
    .post(
      "https://training.nerdbord.io/api/v1/openai/chat/completions",
      requestData,
      { headers }
    )
    .then((response) => {
      console.log("Response:", response.data.choices[0].message.content);
      return response.data.choices[0].message.content;
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    });
}
