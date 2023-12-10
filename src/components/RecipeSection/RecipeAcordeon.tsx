import { useMemo, useState } from "react";
import styled from "styled-components";
import { Ingredient, ingredients } from "../../utils/hooks/useRecipesHelpers/generateRecipeIngredients";
import { Instructions } from "../../utils/hooks/useRecipesHelpers/generateRecipeInstructions";

const RecipeAcordeonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid var(--gray, #d6d6d6);
  background: #fff;
  gap: 4px;
`;
const AccordeonButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 16px 12px 16px;
`;
const RecipeInstructionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 0px 16px 16px 16px;
`;
const RecipeTitle = styled.h3`
  font-weight: 700;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const RecipeListItem = styled.div`
  line-height: 20px;
`;

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
  const [acordeonState, setAcordeonState] = useState(false);
  const toggleAcordeonState = () => {
    setAcordeonState((prev) => !prev);
  };
  const data = useMemo(() => {
    try {
      if (props.description === "Podawanie") return [<RecipeListItem>{props.data.join(" ")}</RecipeListItem>];
      else {
        const elements = [];
        let index = 0;
        for (const [key, value] of Object.entries(props.data)) {
          if (index !== 0) {
            elements.push(<br />);
          }
          index++;
          // @ts-ignore
          // subcathegory = [] i do <subcath to robzić)
          elements.push(<RecipeTitle>{dictionary[`${key}`]}</RecipeTitle>);
          if (props.description === "Przygotowanie") {
            elements.push(
              ...value.map((step: string, index: number) => (
                <RecipeListItem>
                  {index + 1}. {step}
                </RecipeListItem>
              ))
            );
          } else {
            elements.push(
              ...value.map((ingredient: Ingredient, index: number) => {
                return (
                  <RecipeListItem>
                    {index + 1}. {ingredient.name} ({ingredient.quantity})
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
      <AccordeonButton onClick={toggleAcordeonState}>{props.description}</AccordeonButton>
      {acordeonState && <RecipeInstructionsWrapper>{...data}</RecipeInstructionsWrapper>}
    </RecipeAcordeonWrapper>
  );
}

const dictionary = {
  dough: "ciasto",
  filling: "farsz",
  dough_preparation: "ciasto",
  forming_and_cooking_dumplings: "formowanie i gotowanie pierogów",
  filling_preparation: "farsz",
};
