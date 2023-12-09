import { useMemo } from "react";
import styled from "styled-components";
import { Ingredient, ingredients } from "../../utils/hooks/useRecipesHelpers/generateRecipeIngredients";
import { Instructions } from "../../utils/hooks/useRecipesHelpers/generateRecipeInstructions";

const RecipeAcordeonWrapper = styled.div`
  display: flex;
`;
const AccordeonButton = styled.button``;
const RecipeInstructionsWrapper = styled.div``;
const RecipeTitle = styled.h3`
  text-transform: capitalize;
`;
const RecipeListItem = styled.div``;

// It's really unelegant but it works, and time is precious here.
export type RecipeAcordeonProps =
  | {
      description: "Podawanie";
      data: string[];
    }
  | {
      description: "Przygotowanie";
      data: Omit<Instructions, "serving">;
    }
  | {
      description: "Składniki";
      data: ingredients;
    };

export default function RecipeAcordeon(props: RecipeAcordeonProps) {
  const data = useMemo(() => {
    try {
      if (props.description === "Podawanie") return [<RecipeListItem>{props.data.join(" ")}</RecipeListItem>];
      else {
        const elements = [];
        for (const [key, value] of Object.entries(props.data)) {
          // @ts-ignore
          elements.push(<RecipeTitle>{dictionary[`${key}`]}</RecipeTitle>);
          if (props.description === "Przygotowanie") {
            elements.push(...value.map((step: string) => <RecipeListItem>{step}</RecipeListItem>));
          } else {
            elements.push(
              ...value.map((ingredient: Ingredient) => {
                return (
                  <RecipeListItem>
                    {ingredient.name} ({ingredient.quantity})
                  </RecipeListItem>
                );
              })
            );
          }
        }
        return elements;
      }
    } catch (e) {
      return [];
    }
  }, [props.data]);
  return (
    <RecipeAcordeonWrapper>
      <AccordeonButton>{props.description}</AccordeonButton>
      <RecipeInstructionsWrapper>{...data}</RecipeInstructionsWrapper>
    </RecipeAcordeonWrapper>
  );
}

const dictionary = {
  dough: "ciasto",
  filling: "",
  dough_preparation: "ciasto",
  forming_and_cooking_dumplings: "formowanie i gotowanie pierogów",
  filling_preparation: "przygotowanie nadzienia",
};
