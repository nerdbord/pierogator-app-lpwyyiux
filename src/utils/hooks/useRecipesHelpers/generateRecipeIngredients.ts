import axios from "axios";

export type GenerateRecipeIngredients = {
  dough: string;
  filling: string;
  ingredients: string;
  notes: string;
};

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface ingredients {
  dough: Ingredient[];
  filling: Ingredient[];
}

export default async function generateRecipeIngredients({
  dough,
  filling,
  ingredients,
  notes,
}: GenerateRecipeIngredients): Promise<ingredients> {
  const requestData = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You have to generate object called ingredients based on interface ingredients, here are listed interfaces you need to know: 
          interface Ingredient {
            name: string;
            quantity: string;
          }

          interface ingredients {
              dough: Ingredient[];
              filling: Ingredient[];
          }

          User will provide you dough as a string (user prompt for dough, it could be some basic instructions, dough that user would like to knead), filling as a string (user prompt for filling, it could be filling name with food properties like tasty, dry, etc), ingredients as a string (list of ingredients from which filling, and dough will be made, treat them as basic must have ingredients, take into account that notes are superior to ingredients).
          Take notice that all of generated data should be in polish language.
          Whilst creating ingredients take into accout user provided ingredients and add some of yours if needed (but take into account user notes, example: if they're allergic to sth don't add such ingredients, or if they're vegan remove any animal products).
          Ingredients name should contain ingredient name (user will provide you ingredients, some of these you should deduce from fillings and dough recipes, whilst taking into consideration user notes), their quantity is based on real life quantities when thinking of such ingredient, e.g. ml, cup, grams.
          You should return only JSON of code of ingredients object.
        `,
      },
      {
        role: "user",
        content: `dough: ${dough}, filling: ${filling}, ingredients: ${ingredients}, notes: ${notes}`,
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
