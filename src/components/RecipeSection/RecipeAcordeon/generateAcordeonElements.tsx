import styled from "styled-components";
import { Ingredient, ingredients } from "../../../utils/hooks/useRecipesHelpers/generateRecipeIngredients";
import { Instructions } from "../../../utils/hooks/useRecipesHelpers/generateRecipeInstructions";
import { RecipeDescription, RecipeListItem } from "../RecipeAcordeon";

const RecipeTitle = styled.h3`
  text-transform: capitalize;
`;

export default function generateElements(
  description: RecipeDescription,
  data: Omit<Instructions, "serving"> | ingredients
) {
  const elements = [];

  for (const [key, value] of Object.entries(data)) {
    // @ts-ignore
    elements.push(<RecipeTitle>{dictionary[key]}</RecipeTitle>);

    if (description === RecipeDescription.Podawanie) {
      elements.push(...value.map((step: string) => <RecipeListItem>{step}</RecipeListItem>));
    } else {
      elements.push(
        ...value.map((item: Ingredient) => (
          <RecipeListItem>
            {item.quantity} {item.name}
          </RecipeListItem>
        ))
      );
    }
  }

  return elements;
}

const dictionary = {
  dough: "ciasto",
  filling: "farsz",
  dough_preparation: "ciasto",
  forming_and_cooking_dumplings: "formowanie i gotowanie pierogów",
  filling_preparation: "przygotowanie farszu",
};
